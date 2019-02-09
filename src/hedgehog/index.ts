export const getStartMessage = (): string => {
  return 'Фуфтыфу! ЁжикБот на связи =]';
};

export const getStartCommands = (): any => {
  return {
    reply_markup: {
      keyboard: [
        ['Фу', 'Фуфты', 'Фуфтыфу'],
        ['Ёжик', `${(Math.floor(Math.random() * +process.env.NUMBER) + 1)}`],
      ],
    },
  };
};

export const getResponse = ({ text, name }: { text: string, name: string }): string => {
  if (text === 'help') {
    return `Фуф. Вот, что я уже умею:
      1) Фу
      2) Фуфты
      3) Фуфтыфу
      4) Номер ёжика в каталогизаторе ёжиков
      5) Ёжик
      6) @icebrest, @dvvsbrest`;
  }

  if (text === 'ёжик' ||
    text === 'ежик') {
    const randomHedgehogNumber = Math.floor(Math.random() * +process.env.NUMBER) + 1;
    return `Случайный ёжик №${randomHedgehogNumber}: `
      + `https://zinovikbot.herokuapp.com/${randomHedgehogNumber}.jpg`;
  }

  if (+text >= 1 && +text <= +process.env.NUMBER) {
    return `Ёжик №${text}: https://zinovikbot.herokuapp.com/${text}.jpg`;
  }

  if (+text > +process.env.NUMBER) {
    return `Столько ёжиков у меня пока нет :( Есть только ${process.env.NUMBER} фуфтыёжиков (=`;
  }

  if (text === 'фуфтыфу') {
    return 'И тебе фуфтыфу, добрчеловек.';
  }

  if (text === 'фуфты') {
    return 'Фуфты-фуфты!';
  }

  if (text === 'фу') {
    return 'Фу!';
  }

  return `Фуфтыфу, ${name}! ЁжикБот на связи =] Я не шплю тут.`;
};

export const getSubscriptionMessage = (): string => {
  return 'Теперь я буду присылать тебе новое рассписание, если оно обновится!';
};

export const getUnsubscriptionMessage = (): string => {
  return 'Я больше не буду присылать тебе новое рассписание.';
};

export const getErrorMessage = (): string => {
  return 'Что-то пошло не так(';
};

export const getInviteMessage = (): string => {
  return `Заходи в ${process.env.CHANNEL_ID} для получения обновлений расписания`;
};
