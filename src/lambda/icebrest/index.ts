import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import { getScheduleDb, SCHEDULE_ICE } from '../../db';

dotenv.config();

const handler = async (_: IncomingMessage, res: ServerResponse) => {
  const scheduleIceDb = await getScheduleDb(SCHEDULE_ICE);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(scheduleIceDb));
};

if (!process.env.IS_NOW) {
  createServer(handler).listen(6000);
}

export default handler;
