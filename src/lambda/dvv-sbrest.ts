import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_DVVS } from '../db';

dotenv.config();

const handler = async (event: any, context: any, callback: any) => {

  let scheduleDvvsDb = '';

  try {
    scheduleDvvsDb = await getScheduleDb(SCHEDULE_DVVS);
  } catch (error) {
    scheduleDvvsDb = 'Something went wrong...';
  }

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: scheduleDvvsDb,
  });
};

// if (!process.env.IS_NOW) {
//   createServer(handler).listen(6000);
// }

export default handler;
