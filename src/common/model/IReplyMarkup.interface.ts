export interface IReplyMarkup {
  inline_keyboard: [
    Array<{
      text: string;
      callback_data: string;
    }>,
  ];
}
