process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import nodeTelegramBotApi = require('node-telegram-bot-api');
import express = require('express');

import * as db from './modules/db';
import * as hedgehog from './modules/hedgehog';
import * as brestHockey from './modules/brest-hockey';
import * as brestDvvs from './modules/brest-dvvs';

const CURRENT_URL = 'https://zinovikbot.herokuapp.com';

const app = express();
const bot = new nodeTelegramBotApi(process.env.TOKEN, { polling: true });

bot.onText(/\/start/, ({ chat: { id } }) => {
  bot.sendMessage(id, hedgehog.getStartMessage(), hedgehog.getStartCommands());
});

bot.on('message', ({ text, chat: { id, first_name } }) => {
  const input = text.toString().toLowerCase();
  console.log(id, input);

  if (input.indexOf('/start') > -1 ||
    input.indexOf('/echo') > -1) {
    return;
  }

  bot.sendMessage(id, hedgehog.getResponse({ text: input, name: first_name }));
});

app.set('port', process.env.PORT || 8100);
app.use(express.static(path.join(__dirname, '../hedgehogs')));
app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

// Get first schedules
Promise.all([brestHockey.getSchedule(), brestDvvs.getSchedule()])
  .then(([scheduleBrestHockey, scheduleBrestDvvs]) => {
    Promise.all([
      db.setScheduleIce(scheduleBrestHockey),
      db.setScheduleDvvs(scheduleBrestDvvs),
    ]);
  })
  .catch((error) => {
    console.log(error);
  });

// Schedules subscription
setInterval(
  () => {
    Promise.all([
      brestHockey.getSchedule(),
      db.getScheduleIce(),
      brestDvvs.getSchedule(),
      db.getScheduleDvvs(),
    ])
      .then(([
        scheduleBrestHockey,
        scheduleIceDb,
        scheduleBrestDvvs,
        scheduleDvvsDb,
      ]) => {

        if (scheduleIceDb !== scheduleBrestHockey) {
          bot.sendMessage(process.env.ICE_CHANNEL_ID, scheduleBrestHockey);
          bot.sendMessage(process.env.CHANNEL_ID, scheduleBrestHockey);
          db.setScheduleIce(scheduleBrestHockey);
        }

        if (scheduleDvvsDb !== scheduleBrestDvvs) {
          bot.sendMessage(process.env.DVVS_CHANNEL_ID, scheduleBrestDvvs);
          bot.sendMessage(process.env.CHANNEL_ID, scheduleBrestDvvs);
          db.setScheduleDvvs(scheduleBrestDvvs);
        }

      })
      .catch((error) => {
        console.log(error);
      });
  },
  1 * 60 * 60 * 1000); // every hour

// Prevent Heroku Node App From Sleeping
setInterval(() => axios.get(CURRENT_URL), 15 * 60 * 1000); // every 15 minutes
