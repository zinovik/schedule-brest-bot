import 'babel-polyfill';

import * as dotenv from 'dotenv';

import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { SchedulerService } from '../scheduler/Scheduler.service';
import { RedisService } from '../database/Redis.service';
import { LanguageService } from '../language/Language.service';
import { TelegramService } from '../telegram/Telegram.service';
import { IceService } from '../schedules/Ice.service';
import { DvvsService } from '../schedules/Dvvs.service';

dotenv.config();

exports.handler = async (event: never, context: never) => {
  if (process.env.REDIS_URL === undefined) {
    throw new ConfigParameterNotDefinedError('REDIS_URL');
  }
  if (process.env.TOKEN === undefined) {
    throw new ConfigParameterNotDefinedError('TOKEN');
  }
  if (process.env.ICE_CHANNEL_ID === undefined) {
    throw new ConfigParameterNotDefinedError('ICE_CHANNEL_ID');
  }
  if (process.env.DVVS_CHANNEL_ID === undefined) {
    throw new ConfigParameterNotDefinedError('DVVS_CHANNEL_ID');
  }

  const schedulerService = new SchedulerService(
    new RedisService(process.env.REDIS_URL),
    new LanguageService(),
    new TelegramService(process.env.TOKEN),
  );

  let results: string[] = [];

  try {
    results = await schedulerService.checkAndUpdateSchedules([
      new IceService(process.env.ICE_CHANNEL_ID, 'ru'),
      new DvvsService(process.env.DVVS_CHANNEL_ID, 'ru'),
    ]);
  } catch (error) {
    console.error('Unexpected error occurred.', error.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      results,
    }),
  };
};
