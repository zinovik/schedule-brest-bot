import * as dotenv from 'dotenv';
import * as https from 'https';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import {
  schedulerIce,
  schedulerDvvs,
  // addCallback,
} from '../../scheduler';

dotenv.config();

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

const makeApiRequest = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(data);
      });

    }).on('error', (error) => {
      reject(error);
    });
  });
};

const bot = {
  sendMessage: async (channelId: string, text: string): Promise<void> => {
    await makeApiRequest(encodeURI(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage?chat_id=${channelId}&text=${text}`));
  },
};

const handler = async (_: IncomingMessage, res: ServerResponse) => {
  try {
    await schedulerIce(bot);
    await schedulerDvvs(bot);
  } catch (error) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error,
    }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    result: 'Schedules were checked',
  }));
};

if (!process.env.IS_NOW) {
  createServer(handler).listen(6000);
}

export default handler;
