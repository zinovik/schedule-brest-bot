export interface ICallbackMessageBody {
  callback_query: {
    data: string;
    message: {
      message_id: string;
      text: string;
      reply_markup: {
        inline_keyboard: {
          text: string;
        }[][];
      };
      chat: {
        id: number;
      };
    };
  };
}
