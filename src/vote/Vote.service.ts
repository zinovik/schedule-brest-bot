import { IVoteService } from './IVoteService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

import { IMessageBody } from '../common/model/ICallbackMessageBody.interface';

export class VoteService implements IVoteService {
  constructor(private readonly telegramService: ITelegramService) {
    this.telegramService = telegramService;
  }

  async processMessage(message: string): Promise<boolean> {
    let messageParsed: IMessageBody;

    try {
      messageParsed = JSON.parse(message);
    } catch (error) {
      console.error('Error parsing user message: ', error.message);
      return false;
    }

    const {
      callback_query: {
        data,
        message: {
          text,
          message_id: messageId,
          chat: { id: chatId },
          reply_markup: replyMarkup,
        },
      },
    } = messageParsed;

    const newReplyMarkup = {
      inline_keyboard: [
        replyMarkup.inline_keyboard[0].map((button, index) => {
          if (index !== Number(data)) {
            return button;
          }

          return {
            text: `${button.text.split(' ')[0]} ${Number(button.text.split(' ')[1]) + 1}`,
            callback_data: button.callback_data,
          };
        }),
      ],
    };

    try {
      await this.telegramService.editMessageText({
        text,
        chatId,
        messageId,
        replyMarkup: JSON.stringify(newReplyMarkup),
      });
    } catch (error) {
      console.error('Error editing telegram message message: ', error.message);
      return false;
    }

    return true;
  }
}
