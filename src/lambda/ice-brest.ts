import 'babel-polyfill';
import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_ICE } from '../db';

dotenv.config();

exports.handler = async (event: any, context: any) => {
  try {
    const scheduleIceDb = await getScheduleDb(SCHEDULE_ICE);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: scheduleIceDb,
    };
  } catch (error) {

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: 'Something went wrong...',
    };
  }
};
