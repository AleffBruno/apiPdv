import { Router } from "express";
import UserController from './app/controllers/UserController';
import PhotoController from './app/controllers/PhotoController';
import SessionController from './app/controllers/SessionController';
import { checkJwt } from "./app/middlewares/checkJwt";


const routes = Router();

// routes.use((req:any,res:any,next:any) => {
//     console.log("all");
//     next();
// })


routes.post("/login", SessionController.login);

routes.get('/user',[checkJwt], UserController.GetUsers)
routes.get('/photo',PhotoController.Create)

export default routes;

