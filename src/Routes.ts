import { Router, Request, Response } from "express";
import UserController from './app/controllers/UserController';

const routes = Router();

// routes.use((req:any,res:any,next:any) => {
//     console.log("all");
//     next();
// })


routes.get('/user',UserController.GetUsers)

export default routes;

