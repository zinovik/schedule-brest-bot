process.env['NTBA_FIX_319'] = '1';

import * as path from 'path';
import axios from 'axios';
import TelegramBot = require('node-telegram-bot-api');
import express = require('express');
import brestHockey from './brest-hockey';

const app = express();

const NUMBER: number = +process.env.NUMBER;

require('dotenv').load();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

const scheduleChatIds = {};
const cache: { schedule: string } = { schedule: '' };

bot.onText(/\/echo (.+)/, ({ chat: { id } }, match) => {
  bot.sendMessage(id, match[1]);
});

bot.onText(/\/start/, ({ chat: { id } }) => {
  bot.sendMessage(id, "Фуфтыфу! ЁжикБот на связи =]", {
    "reply_markup": {
      "keyboard": [
        ["Фу", "Фуфты", "Фуфтыфу"],
        ["Коньки"],
        ["Ёжик", "" + (Math.floor(Math.random() * NUMBER) + 1)]
      ]
    }
  });
});

bot.on('message', ({ text, chat: { id, first_name } }) => {
  console.log(text);

  const chatId = id;

  if (text.toString().toLowerCase().indexOf('/start') > -1 ||
    text.toString().toLowerCase().indexOf('/echo') > -1) {
    return;
  }

  if (text.toString().toLowerCase() === 'коньки' ||
    text.toString().toLowerCase() === 'skates' ||
    text.toString().toLowerCase() === 'ледовый') {
    bot.sendMessage(chatId, cache.schedule || 'Что-то пошло не так(');
    scheduleChatIds[chatId] = !scheduleChatIds[chatId];
    if (scheduleChatIds[chatId]) {
      return bot.sendMessage(chatId, 'Теперь я буду присылать тебе новое рассписание, если оно обновится!');
    }
    return bot.sendMessage(chatId, 'Я больше не буду присылать тебе новое рассписание.');
  }

  if (text.toString().toLowerCase() === 'help') {
    return bot.sendMessage(chatId, `Фуф. Вот, что я уже умею:
      1) Фу
      2) Фуфты
      3) Фуфтыфу
      4) Коньки/Ледовый/Skates
      5) Номер ёжика в каталогизаторе ёжиков
      6) Ёжик`);
  }

  if (text.toString().toLowerCase() === 'ёжик' ||
    text.toString().toLowerCase() === 'ежик') {
    const rh = Math.floor(Math.random() * NUMBER) + 1;
    return bot.sendMessage(chatId, `Случайный ёжик №${rh}: https://zinovikbot.herokuapp.com/${rh}.jpg`);
  }

  if (text >= 1 && text <= NUMBER) {
    return bot.sendMessage(chatId, `Ёжик №${text}: https://zinovikbot.herokuapp.com/${text}.jpg`);
  }

  if (text.toString().toLowerCase() === 'фуфтыфу') {
    return bot.sendMessage(chatId, `И тебе фуфтыфу, добрчеловек.`);
  }

  if (text.toString().toLowerCase() === 'фуфты') {
    return bot.sendMessage(chatId, `Фуфты-фуфты!`);
  }

  if (text.toString().toLowerCase() === 'фу') {
    return bot.sendMessage(chatId, `Фу!`);
  }

  bot.sendMessage(chatId, `Фуфтыфу, ${first_name}! ЁжикБот на связи =] Я не шплю тут.`);
});

app.set('port', process.env.PORT || 8100);

app.use(express.static(path.join(__dirname, 'hedgehogs')));

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

// Prevent Heroku Node App From Sleeping
setInterval(() => {
  axios.get('http://zinovikbot.herokuapp.com');
}, 15 * 60 * 1000); // every 15 minutes

brestHockey.getSchedule()
  .then((schedule: string) => {
    cache.schedule = schedule;
  })
  .catch((error) => {
    console.log(error);
  });

setInterval(() => {
  brestHockey.getSchedule()
    .then((schedule: string) => {
      if (cache.schedule !== schedule) {
        cache.schedule = schedule;
        Object.keys(scheduleChatIds).forEach((id: string) => {
          bot.sendMessage(id, 'Расписание сеансов свободного катания обновилось');
          bot.sendMessage(id, cache.schedule);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}, 1 * 60 * 60 * 1000); // every hour
