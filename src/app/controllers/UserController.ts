import { getUsers } from '../services/UserService';
import { Request, Response } from "express";
import { User } from '../models/User';
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';

class UserController{
    public create = async (req:Request, res:Response) => {

        //COLOCAR VALIDAÇÕES DO 'class-validator' aqui depois

        const userRepository = getRepository(User);
        // const userExists = await userRepository.find({where:{email:req.body.email}});

        // console.log(userExists.length)

        // if(userExists.length == 0) {
        //     return res.status(400).json({error:'email aready exists'})
        // }

        const user = new User();
        user.email = req.body.email;
        user.password = user.hashPassword( req.body.password );
        user.isAdmin = false;
        user.name = "99999999";
        user.phone = "99999999";
        user.comission = "0";

        await userRepository.save(user);

        const token = jwt.sign(
            { userId: user.id },
            <string>authConfig.secret,
            { expiresIn: authConfig.expiresIn }
        );

        return res.json({user,token}) 
    };

    public GetUsers = (req:Request, res:Response) => {
        const users = getUsers();
        res.json({users}) 
    };
}

export default new UserController();