import 'babel-polyfill';

import { getScheduleDb } from '../schedules/brest-dvvs';

exports.handler = async (event: never, context: never) => {
  let scheduleDvvsDb;

  try {
    scheduleDvvsDb = await getScheduleDb();
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: scheduleDvvsDb,
  };
};
