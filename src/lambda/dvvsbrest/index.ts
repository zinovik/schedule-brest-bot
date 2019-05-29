import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import { getScheduleDb, SCHEDULE_DVVS } from '../../db';

dotenv.config();

const handler = async (_: IncomingMessage, res: ServerResponse) => {
  const scheduleDvvsDb = await getScheduleDb(SCHEDULE_DVVS);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(scheduleDvvsDb));
};

if (!process.env.IS_NOW) {
  createServer(handler).listen(6000);
}

export default handler;
