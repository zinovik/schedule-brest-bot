process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import TelegramBot = require('node-telegram-bot-api');
import express = require('express');
import db from './modules/db';
import hedgehog from './modules/hedgehog';
import brestHockey from './modules/brest-hockey';

const app = express();
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, ({ chat: { id } }, match) => {
  bot.sendMessage(id, match[1]);
});

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

  if (input === 'коньки' ||
    input === 'skates' ||
    input === 'ледовый') {

    return Promise.all([db.getSchedule(), db.toggleSubscribedChatId(id)])
      .then(([schedule, subscribed]: any[]) => {
        bot.sendMessage(id, schedule || hedgehog.getErrorMessage());
        if (subscribed) {
          return bot.sendMessage(id, hedgehog.getSubscriptionMessage());
        }
        return bot.sendMessage(id, hedgehog.getUnsubscriptionMessage());
      });
  }

  return bot.sendMessage(id, hedgehog.getResponse({ text: input, name: first_name }));
});

app.set('port', process.env.PORT || 8100);

app.use(express.static(path.join(__dirname, '../hedgehogs')));

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

brestHockey.getSchedule()
  .then((scheduleBrestHockey: string) => {
    return db.setSchedule(scheduleBrestHockey);
  })
  .catch((error) => {
    console.log(error);
  });

// Schedule Subscription
setInterval(() => {
  let schedule: string;
  let chatIds: any;
  Promise.all([brestHockey.getSchedule(), db.getSchedule(), db.getSubscribedChatIds()])
    .then(([scheduleBrestHockey, scheduleDb, subscribedChatIds]) => {
      if (scheduleDb !== scheduleBrestHockey) {
        schedule = scheduleBrestHockey;
        chatIds = subscribedChatIds;
        return db.setSchedule(scheduleBrestHockey);
      }
      return Promise.resolve('');
    })
    .then(() => {
      if (schedule && chatIds) {
        Object.keys(chatIds).forEach((id: string) => {
          bot.sendMessage(id, hedgehog.getUpdateMessage());
          bot.sendMessage(id, schedule);
        });
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
