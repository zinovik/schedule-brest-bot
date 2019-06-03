import 'babel-polyfill';

import { getScheduleDb } from '../scheduler/brest-ice';

exports.handler = async (event: any, context: any) => {
  let scheduleIceDb;

  try {

    scheduleIceDb = await getScheduleDb();

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
    body: scheduleIceDb,
  };
};
