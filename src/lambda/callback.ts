import 'babel-polyfill';

import { editMessageText } from '../telegram/index';
import { getDaysOfWeekButtons } from '../phrases/phrases-rus';

// TODO: Add request for monitoring

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    const bodyParsed = JSON.parse(event.body);

    const text = bodyParsed.callback_query.message.text || '';

    const votes: number[] = [];

    bodyParsed.callback_query.message.reply_markup.inline_keyboard[0].forEach(({ text }: { text: string }) => {
      votes.push(Number(text.split('(')[1].split(')')[0]));
    });

    switch (bodyParsed.callback_query.data) {
      case 'monday':
        votes[0] = votes[0] + 1;
        break;
      case 'tuesday':
        votes[1] = votes[1] + 1;
        break;
      case 'wednesday':
        votes[2] = votes[2] + 1;
        break;
      case 'thursday':
        votes[3] = votes[3] + 1;
        break;
      case 'friday':
        votes[4] = votes[4] + 1;
        break;
      case 'saturday':
        votes[5] = votes[5] + 1;
        break;
      case 'sunday':
        votes[6] = votes[6] + 1;
        break;
    }

    await editMessageText(
      bodyParsed.callback_query.message.chat.id,
      bodyParsed.callback_query.message.message_id,
      text,
      getDaysOfWeekButtons(...votes),
    );
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};
