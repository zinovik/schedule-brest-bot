import 'babel-polyfill';

import { editMessageText } from '../telegram/index';
import { getDaysOfWeekButtons } from '../phrases/phrases-rus';

// TODO: Add request for monitoring

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    const bodyParsed = JSON.parse(event.body);

    const text = bodyParsed.callback_query.message.text || '';
    console.log(bodyParsed.callback_query.message.reply_markup);

    const votes = [0, 0, 0, 0, 0, 0, 0];

    switch (bodyParsed.callback_query.data) {
      case 'monday':
        votes[0] = 1;
        break;
      case 'tuesday':
        votes[1] = 1;
        break;
      case 'wednesday':
        votes[2] = 1;
        break;
      case 'thursday':
        votes[3] = 1;
        break;
      case 'friday':
        votes[4] = 1;
        break;
      case 'saturday':
        votes[5] = 1;
        break;
      case 'sunday':
        votes[5] = 1;
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
