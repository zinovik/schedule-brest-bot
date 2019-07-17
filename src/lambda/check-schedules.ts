import 'babel-polyfill';

import {
  checkAndUpdateIce,
  checkAndUpdateDvvs,
} from '../scheduler/Scheduler.service';

exports.handler = async (event: never, context: never) => {
  let iceResult = '';
  let dvvsResult = '';

  try {
    iceResult = await checkAndUpdateIce();
  } catch (error) {
    iceResult = error;
  }

  try {
    dvvsResult = await checkAndUpdateDvvs();
  } catch (error) {
    dvvsResult = error;
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      iceResult,
      dvvsResult,
    }),
  };

};
