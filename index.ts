process.env['NTBA_FIX_319'] = '1';

require('dotenv').load();
import * as path from 'path';
import axios from 'axios';
import TelegramBot = require('node-telegram-bot-api');
import express = require('express');

import db from './modules/db';
import hedgehog from './modules/hedgehog';
import brestHockey from './modules/brest-hockey';
import brestDvvs from './modules/brest-dvvs';

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

    return Promise.all([db.getScheduleSkates(), db.toggleSubscribedSkatesChatId(id)])
      .then(([schedule, subscribed]: any[]) => {
        bot.sendMessage(id, schedule || hedgehog.getErrorMessage());
        bot.sendMessage(id, hedgehog.getInviteMessage());
        if (subscribed) {
          return bot.sendMessage(id, hedgehog.getSubscriptionMessage());
        }
        return bot.sendMessage(id, hedgehog.getUnsubscriptionMessage());
      });
  }

  if (input === 'бассейн' ||
    input === 'poll' ||
    input === 'дввс') {

    return Promise.all([db.getSchedulePool(), db.toggleSubscribedPoolChatId(id)])
      .then(([schedule, subscribed]: any[]) => {
        bot.sendMessage(id, schedule || hedgehog.getErrorMessage());
        bot.sendMessage(id, hedgehog.getInviteMessage());
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
    return db.setScheduleSkates(scheduleBrestHockey);
  })
  .catch((error) => {
    console.log(error);
  });

brestDvvs.getSchedule()
  .then((scheduleBrestDvvs: string) => {
    return db.setSchedulePool(scheduleBrestDvvs);
  })
  .catch((error) => {
    console.log(error);
  });

// Schedule Subscription
setInterval(() => {
  let scheduleSkates: string;
  let chatIdsSkates: any;
  Promise.all([brestHockey.getSchedule(), db.getScheduleSkates(), db.getSubscribedSkatesChatIds()])
    .then(([scheduleBrestHockey, scheduleDb, subscribedChatIds]) => {
      if (scheduleDb !== scheduleBrestHockey) {
        scheduleSkates = scheduleBrestHockey;
        chatIdsSkates = subscribedChatIds;
        chatIdsSkates[process.env.CHANNEL_ID] = true;
        return db.setScheduleSkates(scheduleBrestHockey);
      }
      return Promise.resolve('');
    })
    .then(() => {
      if (scheduleSkates && chatIdsSkates) {
        Object.keys(chatIdsSkates).forEach((id: string) => {
          bot.sendMessage(id, hedgehog.getUpdateMessage());
          bot.sendMessage(id, scheduleSkates);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

  let schedulePool: string;
  let chatIdsPool: any;
  Promise.all([brestDvvs.getSchedule(), db.getSchedulePool(), db.getSubscribedPoolChatIds()])
    .then(([scheduleBrestDvvs, scheduleDb, subscribedChatIds]) => {
      if (scheduleDb !== scheduleBrestDvvs) {
        schedulePool = scheduleBrestDvvs;
        chatIdsPool = subscribedChatIds;
        chatIdsPool[process.env.CHANNEL_ID] = true;
        return db.setSchedulePool(scheduleBrestDvvs);
      }
      return Promise.resolve('');
    })
    .then(() => {
      if (schedulePool && chatIdsPool) {
        Object.keys(chatIdsPool).forEach((id: string) => {
          bot.sendMessage(id, hedgehog.getUpdateMessage());
          bot.sendMessage(id, schedulePool);
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
