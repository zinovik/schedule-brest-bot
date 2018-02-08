process.env["NTBA_FIX_319"] = 1;

const path = require('path');
const express = require('express');
app = express(); 

const NUMBER = 54;

require('dotenv').load();

const axios = require("axios");
const TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(process.env.token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Фуфтыфу! ЁжикБот на связи =]", {
    "reply_markup": {
      "keyboard": [
        ["Фу", "Фуфты", "Фуфтыфу"],
        ["Коньки"],
        ["Ёжик", "" + (Math.floor(Math.random() * NUMBER) + 1)]
      ]
    }
  });
});

bot.on('message', (msg) => {
  console.log(msg.text);

  const chatId = msg.chat.id;
  const chatName = msg.chat['first_name'];

  if (msg.text.toString().toLowerCase().indexOf('/start') > -1 ||
      msg.text.toString().toLowerCase().indexOf('/echo') > -1) {
    return;
  }

  if (msg.text.toString().toLowerCase() === 'коньки' ||
      msg.text.toString().toLowerCase() === 'skates' ||
      msg.text.toString().toLowerCase() === 'ледовый') {
    bot.sendMessage(chatId, 'Расписание сеансов свободного катания? Хорошо, я потопал на сайт brest-hockey.by...');
    return axios.get('http://brest-hockey.by')
      .then((response) => {
        let page = response.data;
        let n = page.indexOf('время начала сеансов');
        let free = 'Вот, что я там вычитал: ';
        free = `${free}${page.substring(n + 54, n + 1440)}`;
        // free = free.replace(/<small>/g, '');
        // free = free.replace(/<\/small>/g, '');
        // free = free.replace(/<tr>/g, '');
        // free = free.replace(/<\/tr>/g, '');
        // free = free.replace(/<td>/g, '');
        // free = free.replace(/<td >/g, '');
        // free = free.replace(/<\/td>/g, '');
        // free = free.replace(/<tr class="saturday">/g, '');
        // free = free.replace(/<tr class="sunday">/g, '');
        // free = free.replace(/<\/table>/g, '');
        // free = free.replace(/  /g, '');
        free = free.replace(/<(?:.|\n)*?>/gm, '');
        return bot.sendMessage(chatId, free);
      })
      .catch((error) => {
        console.log(error);
        return bot.sendMessage(chatId, 'Что-то сломалось(');
      });
  }

  if (msg.text.toString().toLowerCase() === '/help') {
    return bot.sendMessage(chatId, `Фуф. Вот, что я уже умею:
      1) Фу
      2) Фуфты
      3) Фуфтыфу
      4) Коньки/Ледовый/Skates
      5) Номер ёжика в каталогизаторе ёжиков
      6) Ёжик`);
  }

  if (msg.text.toString().toLowerCase() === 'ёжик' ||
      msg.text.toString().toLowerCase() === 'ежик') {
    let rh = Math.floor(Math.random() * NUMBER) + 1;
    return bot.sendMessage(chatId, `Случайный ёжик №${rh}: https://zinovikbot.herokuapp.com/${rh}.jpg`);
  }

  if (msg.text >= 1 && msg.text <= NUMBER) {
    return bot.sendMessage(chatId, `Ёжик №${msg.text}: https://zinovikbot.herokuapp.com/${msg.text}.jpg`);
  }

  if (msg.text.toString().toLowerCase() === 'фуфтыфу') {
    return bot.sendMessage(chatId, `И тебе фуфтыфу, добрчеловек.`);
  }

  if (msg.text.toString().toLowerCase() === 'фуфты') {
    return bot.sendMessage(chatId, `Фуфты-фуфты!`);
  }

  if (msg.text.toString().toLowerCase() === 'фу') {
    return bot.sendMessage(chatId, `Фу!`);
  }

  bot.sendMessage(chatId, `Фуфтыфу, ${chatName}! ЁжикБот на связи =] Я не шплю тут.`);
});

app.set('port', process.env.PORT || 8100);

app.use(express.static(path.join(__dirname, 'hedgehogs')));

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

// Prevent Heroku Node App From Sleeping
setInterval(function () {
  axios.get("http://zinovikbot.herokuapp.com");
}, 300000); // every 5 minutes (300000)
