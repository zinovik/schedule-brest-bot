import { IVoteService } from './IVoteService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

import { getDaysOfWeekButtons } from '../language/Language.service';

import { ICallbackMessageBody } from '../common/model/ICallbackMessageBody.interface';

export class VoteService implements IVoteService {
  constructor(private readonly telegramService: ITelegramService) {
    this.telegramService = telegramService;
  }

  async processMessage(message: string): Promise<boolean> {
    let messageParsed: ICallbackMessageBody;

    try {
      messageParsed = JSON.parse(message);
    } catch (error) {
      console.error('Error parsing user message: ', error.message);
      return false;
    }

    try {
      const text = messageParsed.callback_query.message.text || '';

      const votes: number[] = [];

      messageParsed.callback_query.message.reply_markup.inline_keyboard[0].forEach(({ text }: { text: string }) => {
        votes.push(Number(text.split(' ')[1]));
      });

      switch (messageParsed.callback_query.data) {
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

      await this.telegramService.editMessageText({
        text,
        chatId: messageParsed.callback_query.message.chat.id,
        messageId: messageParsed.callback_query.message.message_id,
        replyMarkup: getDaysOfWeekButtons(...votes),
      });
    } catch (error) {
      console.log(error);
    }

    return true;
  }
}
