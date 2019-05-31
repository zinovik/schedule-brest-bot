import 'babel-polyfill';
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
  sendMessage: (channelId: string, text: string): Promise<any> => {
    return axios.get(encodeURI(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage?chat_id=${channelId}&text=${text}`));
  },
};

exports.handler = async (event: any, context: any) => {
  return Promise.all([
    schedulerIce(bot),
    schedulerDvvs(bot),
  ])
    .then(([iceResult, dvvsResult]) => {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          result: `Schedules were checked: Ice: ${iceResult}, Dvvs: ${dvvsResult}`,
        }),
      };
    })
    .catch(() => {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: 'Something went wrong...',
      };
    });
};
