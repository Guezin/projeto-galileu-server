import 'reflect-metadata';
import express, { json, Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './database/connectionDB';

import routes from './routes/index.routes';

const server = express();

server.use(json());
server.use(routes);
server.use(
  (
    error: Error,
    request: Request,
    response: Response,
    _: NextFunction
  ): Response => {
    if (error instanceof Error) {
      return response.status(401).json({ error: error.message });
    }

    return response.status(500).json({ error: 'Internal Server Error' });
  }
);

server.listen(1995, () => console.log('Server is running on port 3333'));
