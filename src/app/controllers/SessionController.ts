import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import authConfig from '../../config/auth';
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../models/User";
// import config from "../config/config";

class SessionController{
    public login = async (req:Request, res:Response) => {
        //Check if username and password are set
        // let { username, password } = req.body;
        // if (!(username && password)) {
        //     res.status(400).send("falta credenciais");
        // }
        
        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
            { userId: 1, username: "jose" },
            <string>authConfig.secret,
            { expiresIn: authConfig.expiresIn }
        );

        //Send the jwt in the response
        res.json({token});
    };
}

export default new SessionController();


