import { IVoteService } from './IVoteService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

import { IMessageBody } from '../common/model/IMessageBody.interface';
import { IReplyMarkup } from '../common/model/IReplyMarkup.interface';

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

    let data: string;
    let callbackQueryId: string;
    let text: string;
    let messageId: string;
    let chatId: number;
    let replyMarkup: IReplyMarkup;

    try {
      ({
        callback_query: {
          id: callbackQueryId,
          data,
          message: {
            text,
            message_id: messageId,
            chat: { id: chatId },
            reply_markup: replyMarkup,
          },
        },
      } = messageParsed);
    } catch (error) {
      console.error('Error user message format: ', error.message);
      return false;
    }

    const newReplyMarkup = {
      inline_keyboard: [
        replyMarkup.inline_keyboard[0].map((button) => {
          if (button.callback_data !== data) {
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

      await this.telegramService.answerCallback({ callbackQueryId, text: 'Your vote has been counted' });
    } catch (error) {
      console.error('Error editing telegram message message: ', error.message);
      return false;
    }

    return true;
  }
}
