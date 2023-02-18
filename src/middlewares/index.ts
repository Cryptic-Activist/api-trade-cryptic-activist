import bodyParser from 'body-parser';
import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import session from 'express-session';
import morgan from 'morgan';

import corsOptions from '../config/middlewares/cors';

export default (app: Application): void => {
  app.use(
    bodyParser.json({
      limit: '50mb',
    }),
  );

  app.use(cors(corsOptions));

  app.use(json());

  app.use(
    urlencoded({
      extended: false,
    }),
  );

  app.use(
    session({
      secret: process.env.APP_SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    }),
  );

  app.use(morgan('dev'));
};
