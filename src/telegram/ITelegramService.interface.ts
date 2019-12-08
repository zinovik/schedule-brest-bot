export interface ITelegramService {
  sendMessage({ text, replyMarkup, chatId }: { text: string; replyMarkup: string; chatId: string | number }): Promise<void>;

  answerCallback({ callbackQueryId, text }: { callbackQueryId: string; text?: string }): Promise<void>;

  editMessageText({
    chatId,
    messageId,
    text,
    replyMarkup,
  }: {
    chatId: string | number;
    messageId: string;
    text: string;
    replyMarkup: string;
  }): Promise<void>;
}
