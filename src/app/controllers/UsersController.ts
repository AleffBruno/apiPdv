// import { getUsers } from '../services/UserService';
import UserService from '../services/UserService';
import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';
import { container } from 'tsyringe';

class UserController {

    public create = async (request:Request, response:Response) : Promise<Response> => {
    
        //transformação de dados fica aqui, exemplo: transformar o email do cara em minuscolo
        const { name, email, password, commission, phone } = request.body;
        //COLOCAR VALIDAÇÕES DO 'class-validator' aqui depois
        const userService = container.resolve(UserService);
        const user = await userService.create({name, email, password, commission, phone});
        const token = jwt.sign(
            { userId: user.id },
            <string>authConfig.secret,
            { subject: user.id.toString(), expiresIn: authConfig.expiresIn }
        );

        delete user.password;

        return response.json({user,token});
        
    };

    public GetUsers = async (request:Request, response:Response) : Promise<Response> => {

        const userService = container.resolve(UserService);
        const users = await userService.getUsers();
        return response.json({users}) ;
    };

    public uploadAvatarImage = async (request:Request, response:Response) : Promise<Response> => {

        const userService = container.resolve(UserService);
        const userId = response.locals.jwtPayload.userId;
        const user = await userService.updateUserAvatar({user_id: userId, avatarFilename: request.file.filename });
        delete user.password;
        return response.json(user);

    };
}

export default new UserController();