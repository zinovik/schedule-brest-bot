import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import { getScheduleDb, SCHEDULE_ICE } from '../../db';

dotenv.config();

const handler = async (_: IncomingMessage, res: ServerResponse) => {

  let scheduleIceDb = '';

  try {
    scheduleIceDb = await getScheduleDb(SCHEDULE_ICE);
  } catch (error) {
    scheduleIceDb = 'Something went wrong...';
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(scheduleIceDb);

};

if (!process.env.IS_NOW) {
  createServer(handler).listen(6000);
}

export default handler;
