process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import TelegramBot = require('node-telegram-bot-api');
import express = require('express');

import * as db from './modules/db';
import * as hedgehog from './modules/hedgehog';
import * as brestHockey from './modules/brest-hockey';
import * as brestDvvs from './modules/brest-dvvs';

const app = express();
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

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

  if (hedgehog.isSkatesWord(input)) {
    return Promise.all([db.getScheduleSkates(), db.toggleSubscribedSkatesChatId(id)])
      .then(([schedule, subscribed]: any[]) => {
        bot.sendMessage(id, hedgehog.getInviteMessage());
        if (subscribed) {
          bot.sendMessage(id, schedule || hedgehog.getErrorMessage());
          return bot.sendMessage(id, hedgehog.getSubscriptionMessage());
        }
        bot.sendMessage(id, hedgehog.getUnsubscriptionMessage());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (hedgehog.isPoolWord(input)) {
    return Promise.all([db.getSchedulePool(), db.toggleSubscribedPoolChatId(id)])
      .then(([schedule, subscribed]: any[]) => {
        bot.sendMessage(id, hedgehog.getInviteMessage());
        if (subscribed) {
          bot.sendMessage(id, schedule || hedgehog.getErrorMessage());
          return bot.sendMessage(id, hedgehog.getSubscriptionMessage());
        }
        bot.sendMessage(id, hedgehog.getUnsubscriptionMessage());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  bot.sendMessage(id, hedgehog.getResponse({ text: input, name: first_name }));
});

app.set('port', process.env.PORT || 8100);
app.use(express.static(path.join(__dirname, '../hedgehogs')));
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

// Get first schedules
Promise.all([brestHockey.getSchedule(), brestDvvs.getSchedule()])
  .then(([scheduleBrestHockey, scheduleBrestDvvs]) => {
    Promise.all([db.setScheduleSkates(scheduleBrestHockey), db.setSchedulePool(scheduleBrestDvvs),]);
  })
  .catch((error) => {
    console.log(error);
  });

// Schedules subscription
setInterval(() => {
  Promise.all([
    brestHockey.getSchedule(),
    db.getScheduleSkates(),
    db.getSubscribedSkatesChatIds(),
    brestDvvs.getSchedule(),
    db.getSchedulePool(),
    db.getSubscribedPoolChatIds(),
  ])
    .then(([
      scheduleBrestHockey,
      scheduleSkatesDb,
      subscribedSkatesChatIds,
      scheduleBrestDvvs,
      schedulePoolDb,
      subscribedPoolChatIds,
    ]) => {
      if (scheduleSkatesDb !== scheduleBrestHockey) {
        subscribedSkatesChatIds[process.env.CHANNEL_ID] = true;
        if (scheduleBrestHockey) {
          Object.keys(subscribedSkatesChatIds).forEach((id: string) => {
            if (subscribedSkatesChatIds[id]) {
              bot.sendMessage(id, scheduleBrestHockey);
            }
          });
        }
        db.setScheduleSkates(scheduleBrestHockey);
      }
      if (schedulePoolDb !== scheduleBrestDvvs) {
        subscribedPoolChatIds[process.env.CHANNEL_ID] = true;
        if (scheduleBrestDvvs) {
          Object.keys(subscribedPoolChatIds).forEach((id: string) => {
            if (subscribedPoolChatIds[id]) {
              bot.sendMessage(id, scheduleBrestDvvs);
            }
          });
        }
        db.setSchedulePool(scheduleBrestDvvs);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, 1 * 60 * 60 * 1000); // every hour

// Prevent Heroku Node App From Sleeping
setInterval(() => {
  axios.get('https://zinovikbot.herokuapp.com');
}, 15 * 60 * 1000); // every 15 minutes
