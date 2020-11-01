import axios from 'axios';

import { ITelegramService } from './ITelegramService.interface';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export class TelegramService implements ITelegramService {
  constructor(private readonly token: string) {
    this.token = token;
  }

  private stringToChunks(str: string, size: number): string[] {
    const chunks: string[] = [];

    const chunksNumber = Math.ceil(str.length / size);

    for (let i = 0; i < chunksNumber; i++) {
      chunks.push(str.substring(i * size, (i + 1) * size));
    }

    return chunks;
  }

  async sendMessage({
    text,
    replyMarkup,
    chatId,
  }: {
    text: string;
    replyMarkup: string;
    chatId: string | number;
  }): Promise<void> {
    const chunks = this.stringToChunks(text, 4095);

    for (const chunk of chunks) {
      const message = {
        text: chunk,
        reply_markup: replyMarkup,
        chat_id: chatId,
        disable_notification: true,
      };

      // console.log(`Sending telegram message: ${JSON.stringify(message)}...`);

      const { data } = await axios.post(`${TELEGRAM_API_URL}${this.token}/sendMessage`, message);

      // console.log(`Telegram message was successfully sent: ${JSON.stringify(data)}`);
    }
  }

  async answerCallback({ callbackQueryId, text }: { callbackQueryId: string; text?: string }): Promise<void> {
    const message = {
      callback_query_id: callbackQueryId,
      text,
    };

    console.log(`Sending telegram callback answer: ${JSON.stringify(message)}...`);

    const { data } = await axios.post(`${TELEGRAM_API_URL}${this.token}/answerCallbackQuery`, message);

    console.log(`Telegram callback answer was successfully sent: ${JSON.stringify(data)}`);
  }

  async editMessageText({
    chatId,
    messageId,
    text,
    replyMarkup,
  }: {
    chatId: string | number;
    messageId: string;
    text: string;
    replyMarkup: string;
  }): Promise<void> {
    const message = {
      text,
      chat_id: chatId,
      message_id: messageId,
      reply_markup: replyMarkup,
    };

    // console.log(`Editing telegram message: ${JSON.stringify(message)}...`);

    const { data } = await axios.post(`${TELEGRAM_API_URL}${process.env.TOKEN}/editMessageText`, message, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // console.log(`Telegram message was successfully edited: ${JSON.stringify(data)}`);
  }
}
