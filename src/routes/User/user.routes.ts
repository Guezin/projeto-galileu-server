import { Router } from 'express';

import CreateUserService from '../../services/CreateUserService';

const routes = Router();

routes.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const createSession = new CreateUserService();

  const user = await createSession.execute({
    name,
    email,
    password,
  });

  return response.json(user);
});

export default routes;
