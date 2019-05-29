import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import axios from 'axios';

import {
  schedulerIce,
  schedulerDvvs,
  // addCallback,
} from '../../scheduler';

dotenv.config();

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

const bot = {
  sendMessage: async (channelId: string, text: string): Promise<void> => {
    await axios.get(encodeURI(`${TELEGRAM_API_URL}${process.env.TOKEN}/sendMessage?chat_id=${channelId}&text=${text}`));
  },
};

const handler = async (_: IncomingMessage, res: ServerResponse) => {
  await schedulerIce(bot);
  await schedulerDvvs(bot);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    result: 'Schedules were checked',
  }));
};

if (!process.env.IS_NOW) {
  createServer(handler).listen(6000);
}

export default handler;
