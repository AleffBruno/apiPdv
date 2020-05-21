import { Router, Request, Response } from "express";
import UserController from './app/controllers/UserController';
import PhotoController from './app/controllers/PhotoController';


const routes = Router();

// routes.use((req:any,res:any,next:any) => {
//     console.log("all");
//     next();
// })


routes.get('/user',UserController.GetUsers)
routes.get('/photo',PhotoController.Create)

export default routes;

