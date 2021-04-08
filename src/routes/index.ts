import { Application } from 'express';

import trade from './trade';

export default (app: Application): void => {
  app.use('/trade', trade);
};
