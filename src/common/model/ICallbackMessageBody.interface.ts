export interface IMessageBody {
  callback_query: {
    data: string;
    message: {
      message_id: string;
      text: string;
      reply_markup: {
        inline_keyboard: {
          text: string;
          callback_data: string;
        }[][];
      };
      chat: {
        id: number;
      };
    };
  };
}
