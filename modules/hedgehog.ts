function getStartMessage(): string {
  return 'Фуфтыфу! ЁжикБот на связи =]';
}

function getStartCommands(): any {
  return {
    'reply_markup': {
      'keyboard': [
        ['Фу', 'Фуфты', 'Фуфтыфу'],
        ['Коньки'],
        ['Ёжик', '' + (Math.floor(Math.random() * +process.env.NUMBER) + 1)]
      ]
    }
  };
}

function getResponse({ text, name }: { text: string, name: string }): string {
  if (text === 'help') {
    return `Фуф. Вот, что я уже умею:
      1) Фу
      2) Фуфты
      3) Фуфтыфу
      4) Коньки/Ледовый/Skates
      5) Номер ёжика в каталогизаторе ёжиков
      6) Ёжик`;
  }

  if (text === 'ёжик' ||
    text === 'ежик') {
    const randomHedgehogNumber = Math.floor(Math.random() * +process.env.NUMBER) + 1;
    return `Случайный ёжик №${randomHedgehogNumber}: https://zinovikbot.herokuapp.com/${randomHedgehogNumber}.jpg`;
  }

  if (+text >= 1 && +text <= +process.env.NUMBER) {
    return `Ёжик №${text}: https://zinovikbot.herokuapp.com/${text}.jpg`;
  }

  if (text === 'фуфтыфу') {
    return `И тебе фуфтыфу, добрчеловек.`;
  }

  if (text === 'фуфты') {
    return `Фуфты-фуфты!`;
  }

  if (text === 'фу') {
    return `Фу!`;
  }

  return `Фуфтыфу, ${name}! ЁжикБот на связи =] Я не шплю тут.`;
}

function getSubscriptionMessage(): string {
  return 'Теперь я буду присылать тебе новое рассписание, если оно обновится!';
}

function getUnsubscriptionMessage(): string {
  return 'Я больше не буду присылать тебе новое рассписание.';
}

function getUpdateMessage(): string {
  return 'Расписание сеансов свободного катания обновилось';
}

function getErrorMessage(): string {
  return 'Что-то пошло не так(';
}

export default {
  getStartMessage: getStartMessage,
  getStartCommands: getStartCommands,
  getResponse: getResponse,
  getSubscriptionMessage: getSubscriptionMessage,
  getUnsubscriptionMessage: getUnsubscriptionMessage,
  getUpdateMessage: getUpdateMessage,
  getErrorMessage: getErrorMessage,
};
