import 'babel-polyfill';

import { sendMessage } from '../telegram/index';

// TODO: Add request for monitoring

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    const bodyParsed = JSON.parse(event.body);
    console.log(bodyParsed);
    const firstName = bodyParsed.callback_query.from.first_name;
    const messageId = bodyParsed.callback_query.message.message_id;
    const chatId = bodyParsed.callback_query.message.chat.id;
    const messageText = bodyParsed.callback_query.message.text;
    const data = bodyParsed.callback_query.data;
    console.log(firstName, messageId, chatId, messageText, data);

    // await sendMessage(bodyParsed.message.chat.id, event.body);
  } catch (error) {
    //
  }

  return {
    statusCode: 200,
  };
};

// export const addCallback = (bot: { sendMessage: (channelId: string, text: string) => Promise<void> }) => {
//   bot.on('callback_query', (callbackQuery) => {
//     if (!callbackQuery.message) {
//       return;
//     }

//     let text = callbackQuery.message.text || '';

//     switch (callbackQuery.data) {
//       case 'monday':
//         text += '\nПН';
//         break;
//       case 'tuesday':
//         text += '\nВТ';
//         break;
//       case 'wednesday':
//         text += '\nСР';
//         break;
//       case 'thursday':
//         text += '\nЧТ';
//         break;
//       case 'friday':
//         text += '\nПТ';
//         break;
//       case 'saturday':
//         text += '\nСБ';
//         break;
//       case 'sunday':
//         text += '\nВС';
//         break;
//     }

//     bot.editMessageText(text, {
//       ...DAYS_OF_WEEK_BUTTONS,
//       chat_id: callbackQuery.message.chat.id,
//       message_id: callbackQuery.message.message_id,
//     });
//   });
// };
