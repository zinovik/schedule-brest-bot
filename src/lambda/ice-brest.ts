import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_ICE } from '../db';

dotenv.config();

exports.handler = async (event: any, context: any, callback: any) => {

  let scheduleIceDb = '';

  try {
    scheduleIceDb = await getScheduleDb(SCHEDULE_ICE);
  } catch (error) {
    scheduleIceDb = 'Something went wrong...';
  }

  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: scheduleIceDb,
  });
};
