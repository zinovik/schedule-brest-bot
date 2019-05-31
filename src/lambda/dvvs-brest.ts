import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_DVVS } from '../db';

dotenv.config();

exports.handler = (event: any, context: any, callback: any) => {
  getScheduleDb(SCHEDULE_DVVS)
    .then((scheduleDvvsDb: string) => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: scheduleDvvsDb,
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
