import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_ICE } from '../db';

dotenv.config();

exports.handler = (event: any, context: any, callback: any) => {
  getScheduleDb(SCHEDULE_ICE)
    .then((scheduleIceDb: string) => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: scheduleIceDb,
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
