import { Router } from 'express';

import CreateSessionService from '../../services/CreateSessionService';

const routes = Router();

routes.post('/', async (request, response) => {
  const { email, password } = request.body;
  const createSession = new CreateSessionService();

  const user = await createSession.execute({
    email,
    password,
  });

  return response.json(user);
});

export default routes;
