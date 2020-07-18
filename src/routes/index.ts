import { Router } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import JunkController from '../app/controllers/JunkController';

const routes = Router();

routes.get('/check',(request, response) => {
    response.json({ok:"ok"})
})

routes.get("/junk",JunkController.junk);

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes;