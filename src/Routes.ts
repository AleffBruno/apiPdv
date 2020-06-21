import { Router } from "express";
import UserController from './app/controllers/UserController';
import PhotoController from './app/controllers/PhotoController';
import SessionController from './app/controllers/SessionController';
import { checkJwt } from "./app/middlewares/checkJwt";
import JunkController from "./app/controllers/JunkController";
import CompanyController from "./app/controllers/CompanyController";


const routes = Router();

// routes.use((req:any,res:any,next:any) => {
//     console.log("all");
//     next();
// })

routes.get("/junk",JunkController.junk);

routes.post("/login", SessionController.login);
routes.post("/user", UserController.create);

routes.get('/user',[checkJwt], UserController.GetUsers)
// routes.get('/photo',PhotoController.Create)

routes.get('/company', CompanyController.create)

export default routes;

