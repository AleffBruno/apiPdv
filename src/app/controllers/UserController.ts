// import { getUsers } from '../services/UserService';
import UserService from '../services/UserService';
import { Request, Response } from "express";
import { User } from '../models/User';
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';

class UserController {

    public create = async (request:Request, response:Response) => {
        try {
            // const userRepository = getRepository(User); //estou repetindo isso, ta ruim

            //transformação de dados fica aqui, exemplo: transformar o email do cara em minuscolo

            const { name, email, password, commission, phone } = request.body;

            //COLOCAR VALIDAÇÕES DO 'class-validator' aqui depois

            const userService = new UserService();

            const user = await userService.create({name, email, password, commission, phone});

            const token = jwt.sign(
                { userId: user.id },
                <string>authConfig.secret,
                { expiresIn: authConfig.expiresIn }
            );

            delete user.password;

            return response.json({user,token}) 
        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    };

    public GetUsers = async (request:Request, response:Response) => {
        // const userRepository = getRepository(User); //estou repetindo isso, ta ruim
        const userService = new UserService()
        const users = await userService.getUsers();
        response.json({users}) 
    };
}

export default new UserController();