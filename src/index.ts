process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import nodeTelegramBotApi = require('node-telegram-bot-api');
import express = require('express');

import {
  getStartMessage,
  getStartCommands,
  getResponse,
} from './hedgehog';
import { scheduler } from './scheduler';

const CURRENT_URL = process.env.CURRENT_URL || 'https://zinovikbot.herokuapp.com';
const PERIOD = Number(process.env.PERIOD) || 60;

const app = express();
const bot = new nodeTelegramBotApi(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, ({ chat: { id } }) => {
  bot.sendMessage(id, getStartMessage(), getStartCommands());
});

bot.on('message', ({ text, chat: { id, first_name } }) => {
  const input = text.toString().toLowerCase();
  console.log(id, input);

  if (input.indexOf('/start') > -1 ||
    input.indexOf('/echo') > -1) {
    return;
  }

  bot.sendMessage(id, getResponse({ text: input, name: first_name }));
});

app.set('port', process.env.PORT || 8100);
app.use(express.static(path.join(__dirname, '../public')));
app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

// Schedules subscription
scheduler(bot);
setInterval(() => scheduler(bot), PERIOD * 60 * 1000);

// Prevent Heroku Node App From Sleeping
setInterval(() => axios.get(CURRENT_URL), 15 * 60 * 1000); // every 15 minutes
