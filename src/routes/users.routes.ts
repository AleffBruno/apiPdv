import { Router } from 'express';
import UserController from '../app/controllers/UserController';
import { checkJwt } from "../app/middlewares/checkJwt";
import multer from 'multer';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', UserController.create)
usersRouter.get('/', [checkJwt], UserController.GetUsers);
usersRouter.patch('/avatar', [checkJwt, upload.single('avatar')], UserController.uploadAvatarImage )


export default usersRouter;
