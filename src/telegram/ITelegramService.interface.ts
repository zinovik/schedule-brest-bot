export interface ITelegramService {
  sendMessage({ text, replyMarkup, chatId }: { text: string; replyMarkup: string; chatId: number }): Promise<void>;

  editMessageText({
    chatId,
    messageId,
    text,
    replyMarkup,
  }: {
    chatId: number;
    messageId: string;
    text: string;
    replyMarkup: string;
  }): Promise<void>;
}
