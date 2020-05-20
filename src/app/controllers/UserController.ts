import { getUsers } from '../services/UserService';
import { Request, Response } from "express";

// export const GetUsers = async (req:any, res:any) => {

//     return getUsers();
// };

class UserController{
    public GetUsers = (req:Request, res:Response) => {
        const users = getUsers();
        res.send(users) 
    };
}

export default new UserController();