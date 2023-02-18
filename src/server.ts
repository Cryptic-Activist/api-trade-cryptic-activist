import chalk from 'chalk';
import { checkEnvironmentVariable } from 'cryptic-utils';
import app from './app';
import { success } from './utils/logger/logger';

import requiredEnv from '../envs.json';

checkEnvironmentVariable(requiredEnv);

const port = process.env.PORT;

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${chalk.green(port)}`);
});
