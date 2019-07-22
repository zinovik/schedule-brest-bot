export interface IReplyMarkup {
  inline_keyboard: [
    {
      text: string;
      callback_data: string;
    }[],
  ];
}
