import * as dotenv from 'dotenv';
import axios from 'axios';

import {
  schedulerIce,
  schedulerDvvs,
  // addCallback,
} from '../scheduler';

dotenv.config();

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

const bot = {
  sendMessage: async (channelId: string, text: string): Promise<void> => {
    const { data } = await axios.get(encodeURI(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage?chat_id=${channelId}&text=${text}`));
    return data;
  },
};

exports.handler = async (event: any, context: any, callback: any) => {
  try {
    await schedulerIce(bot);
    await schedulerDvvs(bot);
  } catch (error) {
    //
  }

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      result: 'Schedules were checked',
    }),
  });
};
