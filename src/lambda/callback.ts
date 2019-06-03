import 'babel-polyfill';

import { editMessageText } from '../telegram/index';
import { DAYS_OF_WEEK_BUTTONS } from '../phrases/phrases-rus';

// TODO: Add request for monitoring

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    const bodyParsed = JSON.parse(event.body);

    let text = bodyParsed.callback_query.message.text || '';

    switch (bodyParsed.callback_query.data) {
      case 'monday':
        text += '\nПН';
        break;
      case 'tuesday':
        text += '\nВТ';
        break;
      case 'wednesday':
        text += '\nСР';
        break;
      case 'thursday':
        text += '\nЧТ';
        break;
      case 'friday':
        text += '\nПТ';
        break;
      case 'saturday':
        text += '\nСБ';
        break;
      case 'sunday':
        text += '\nВС';
        break;
    }

    await editMessageText(
      bodyParsed.callback_query.message.chat.id,
      bodyParsed.callback_query.message.message_id,
      text,
      DAYS_OF_WEEK_BUTTONS,
    );
  } catch (error) {
    console.log(error);
  }

  return { statusCode: 200 };
};
