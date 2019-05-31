import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

import { getScheduleDb, SCHEDULE_DVVS } from '../db';

dotenv.config();

const handler = async (_: IncomingMessage, res: ServerResponse) => {

  let scheduleDvvsDb = '';

  try {
    scheduleDvvsDb = await getScheduleDb(SCHEDULE_DVVS);
  } catch (error) {
    scheduleDvvsDb = 'Something went wrong...';
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(scheduleDvvsDb);

};

// if (!process.env.IS_NOW) {
//   createServer(handler).listen(6000);
// }

export default handler;
