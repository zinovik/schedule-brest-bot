import 'babel-polyfill';
import * as dotenv from 'dotenv';

import { getScheduleDb, SCHEDULE_DVVS } from '../db';

dotenv.config();

exports.handler = async (event: any, context: any) => {
  try {
    const scheduleDvvsDb = await getScheduleDb(SCHEDULE_DVVS);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: scheduleDvvsDb,
    };
  } catch (error) {

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: 'Something went wrong...',
    };
  }
};
