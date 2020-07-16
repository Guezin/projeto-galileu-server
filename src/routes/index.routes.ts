import { Router } from 'express';

import sessionRoutes from './Session/session.routes';

import userRoutes from './User/user.routes';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', userRoutes);

export default routes;
