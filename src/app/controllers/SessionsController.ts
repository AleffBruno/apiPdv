import { Request, Response } from "express";

import SessionService from '../services/SessionService';
import { container } from 'tsyringe';
// import UsersRepository from '../infra/typeorm/repositories/UsersRepository';
// import IUsersRepository from "../repositories/IUsersRepository";

class SessionController{

    public login = async (request:Request, response:Response) : Promise<Response> => {
        
        const { email, password } = request.body;

        const sessionService = container.resolve(SessionService);

        const { user, token } = await sessionService.login({email, password});

        delete user.password;

        return response.json({ user, token });

        //CODIGO ANTIGO COMENTADO PARA REFERENCIAS
        // const { email, password } = request.body;
        //Check if email and password are set
        // if (!(email && password)) {
        //     // precisa de return?
        //     return response.status(400).json({msg:"falta dados"});
        // }

        // //Get user from database
        // const userRepository = getRepository(User);
        // let user: User;
        // try {
        //     user = await userRepository.findOneOrFail({ where: { email } });
        // } catch (error) {
        //     // precisa de return?
        //     return response.status(401).json({msg:"Dados incorretos"});
        // }

        // //Check if encrypted password match
        // if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        //     return response.status(401).json({msg:"Dados incorretos_"});
        // }

        // const token = jwt.sign(
        //     { userId: user.id },
        //     <string>authConfig.secret,
        //     { expiresIn: authConfig.expiresIn }
        // );

        // //Send the jwt in the response
        // return response.json({
        //     name: user.name,
        //     email,
        //     token
        // });
    };
}

export default new SessionController();


