import { Router } from 'express';
import UserController from '../app/controllers/UserController';

const usersRouter = Router();

usersRouter.get('/', UserController.GetUsers);
usersRouter.post('/', UserController.create)

export default usersRouter;
