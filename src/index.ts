process.env['NTBA_FIX_319'] = '1';

import * as dotenv from 'dotenv';
import * as TelegramBot from 'node-telegram-bot-api';
import * as express from 'express';
import * as helmet from 'helmet';
import axios from 'axios';

dotenv.config();

import {
  schedulerIce,
  schedulerDvvs,
  setIceBrestEndpoint,
  setDvvsBrestEndpoint,
  addCallback,
} from './scheduler';

const CURRENT_URL = process.env.CURRENT_URL || 'https://schedule-brest-bot.herokuapp.com';
const PERIOD = Number(process.env.PERIOD) || 60;

const bot: TelegramBot = new TelegramBot(process.env.TOKEN || '', { polling: true });

const app = express();
app.use(helmet());
app.set('port', process.env.PORT || 8100);

setIceBrestEndpoint(app);
setDvvsBrestEndpoint(app);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

// Schedules subscriptions
addCallback(bot);
schedulerIce(bot);
schedulerDvvs(bot);
setInterval(() => schedulerIce(bot), PERIOD * 60 * 1000);
setInterval(() => schedulerDvvs(bot), PERIOD * 60 * 1000);

// Prevent Heroku Node App From Sleeping
setInterval(() => axios.get(CURRENT_URL), 15 * 60 * 1000); // every 15 minutes
