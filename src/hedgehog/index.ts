import { hedgehogs } from './info';
import {
  START_MESSAGE,
  HELP_MESSAGE,
  getCommands,
  randomHedgehogMessages,
  getHedgehog,
  hedgehogsMaxCount,
  SIMPLE_PHRASES,
  finalPhrase,
} from '../phrases/phrases-rus';

export const handleMessages = (bot: any) => {
  bot.onText(/\/start/, ({ chat: { id } }: { chat: { id: string } }) => {
    const randomHedgehogNumber = getRandomHedgehogNumber();

    bot.sendMessage(id, START_MESSAGE, getCommands(randomHedgehogNumber));
  });

  bot.on(
    'message',
    ({
      text,
      chat: { id, first_name },
    }: {
      text: string;
      chat: {
        id: string;
        first_name: string;
      };
    }) => {
      const input = text.toString().toLowerCase();
      console.log(id, input);

      if (input.indexOf('/start') > -1 || input.indexOf('/echo') > -1) {
        return;
      }

      bot.sendMessage(id, getResponse({ text: input, name: first_name }));
    },
  );
};

const getResponse = ({ text, name }: { text: string; name: string }): string => {
  if (text === 'help') {
    return HELP_MESSAGE;
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

  if (SIMPLE_PHRASES.some(phrase => phrase.message === text)) {
    return SIMPLE_PHRASES.find(phrase => phrase.message === text)!.answer;
  }

  return finalPhrase(name);
};

const getRandomHedgehogNumber = () => Math.floor(Math.random() * Number(hedgehogs.length)) + 1;
