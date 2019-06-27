import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export const sendMessage = async (channelId: string, text: string, options?: any): Promise<any> => {
  const data = {
    text,
    chat_id: channelId,
    ...options,
  };

  const { data: response } = await axios.post(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const editMessageText = async (channelId: string, messageId: string, text: string, options?: any): Promise<any> => {
  const data = {
    text,
    chat_id: channelId,
    message_id: messageId,
    ...options,
  };

  const { data: response } = await axios.post(`${TELEGRAM_API_URL}${process.env.TOKEN}/editMessageText`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
