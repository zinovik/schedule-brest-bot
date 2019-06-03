import axios from 'axios';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

export const sendMessage = async (channelId: string, text: string): Promise<any> => {
  const data = {
    text,
    chat_id: channelId,
  };

  const { data: response } = await axios.post(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};
