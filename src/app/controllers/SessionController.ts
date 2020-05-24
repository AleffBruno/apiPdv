import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../models/User";
// import config from "../config/config";

class SessionController{
    public login = async (req:Request, res:Response) => {
        //Check if email and password are set
        let { email, password } = req.body;
        if (!(email && password)) {
            // precisa de return?
            return res.status(400).json({msg:"falta dados"});
        }

        //Get user from database
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { email } });
        } catch (error) {
            // precisa de return?
            return res.status(401).json({msg:"Dados incorretos"});
        }

        //Check if encrypted password match
        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            return res.status(401).json({msg:"Dados incorretos_"});
        }

        const token = jwt.sign(
            { userId: user.id },
            <string>authConfig.secret,
            { expiresIn: authConfig.expiresIn }
        );

        //Send the jwt in the response
        return res.json({
            name: user.name,
            email,
            token
        });
    };
}

export default new SessionController();


