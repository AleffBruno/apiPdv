import { Router } from 'express';
import UsersController from '../app/controllers/UsersController';
import { checkJwt } from "../app/middlewares/checkJwt";
import multer from 'multer';
import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', UsersController.create)
usersRouter.get('/', [checkJwt], UsersController.GetUsers);
usersRouter.patch('/avatar', [checkJwt, upload.single('avatar')], UsersController.uploadAvatarImage )


export default usersRouter;
