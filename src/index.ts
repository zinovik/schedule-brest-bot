process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import nodeTelegramBotApi = require('node-telegram-bot-api');
import express = require('express');

import { handleMessages } from './hedgehog';
import { schedulerIce, schedulerDvvs, setEndpoints } from './scheduler';

const CURRENT_URL = process.env.CURRENT_URL || 'https://zinovikbot.herokuapp.com';
const PERIOD = Number(process.env.PERIOD) || 60;

const bot = new nodeTelegramBotApi(process.env.TOKEN, { polling: true });
handleMessages(bot);

const app = express();
app.set('port', process.env.PORT || 8100);
app.use(express.static(path.join(__dirname, '../public')));
setEndpoints(app);
app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

// Schedules subscriptions
schedulerIce(bot);
schedulerDvvs(bot);
setInterval(() => schedulerIce(bot), PERIOD * 60 * 1000);
setInterval(() => schedulerDvvs(bot), PERIOD * 60 * 1000);

// Prevent Heroku Node App From Sleeping
setInterval(() => axios.get(CURRENT_URL), 15 * 60 * 1000); // every 15 minutes
