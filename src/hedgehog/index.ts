import { hedgehogs } from './info';
import {
  startMessage,
  helpMessage,
  getCommands,
  randomHedgehogMessages,
  getHedgehog,
  hedgehogsMaxCount,
  simplePhrases,
  finalPhrase,
} from './phrases-rus';

export const handleMessages = (bot: any) => {
  bot.onText(/\/start/, ({ chat: { id } }) => {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    bot.sendMessage(id, startMessage, getCommands(randomHedgehogNumber));
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
};

const getResponse = ({ text, name }: { text: string, name: string }): string => {
  if (text === 'help') {
    return helpMessage;
  }

  if (randomHedgehogMessages.indexOf(text) >= 0) {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    return getHedgehog(randomHedgehogNumber, hedgehogs[randomHedgehogNumber - 1]);
  }

  const hedgehogNumber = Number(text);

  if (hedgehogNumber) {

    if (hedgehogNumber >= 1 && hedgehogNumber <= Number(hedgehogs.length)) {
      return getHedgehog(hedgehogNumber, hedgehogs[hedgehogNumber - 1]);
    }

    if (+text > hedgehogs.length) {
      return hedgehogsMaxCount(hedgehogs.length);
    }

  }

  if (simplePhrases.some(phrase => phrase.message === text)) {
    return simplePhrases.find(phrase => phrase.message === text).answer;
  }

  return finalPhrase(name);
};

const getRandomHedgehogNumber = () => Math.floor(Math.random() * Number(hedgehogs.length)) + 1;
