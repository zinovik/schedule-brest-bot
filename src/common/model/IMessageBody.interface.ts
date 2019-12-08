import { IReplyMarkup } from './IReplyMarkup.interface';

export interface IMessageBody {
  callback_query: {
    id: string;
    data: string;
    message: {
      message_id: string;
      text: string;
      reply_markup: IReplyMarkup;
      chat: {
        id: number;
      };
    };
  };
}
