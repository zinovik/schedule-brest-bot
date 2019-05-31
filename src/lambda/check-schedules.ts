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

exports.handler = (event: any, context: any, callback: any) => {
  Promise.all([
    schedulerIce(bot),
    schedulerDvvs(bot),
  ])
    .then(([iceResult, dvvsResult]) => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          result: `Schedules were checked: Ice: ${iceResult}, Dvvs: ${dvvsResult}`,
        }),
      });
    })
    .catch(() => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: 'Something went wrong...',
      });
    });
};
