import 'babel-polyfill';

import * as dotenv from 'dotenv';

import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { RedisService } from '../database/Redis.service';

dotenv.config();

exports.handler = async (event: never, context: never) => {
  if (process.env.REDIS_URL === undefined) {
    throw new ConfigParameterNotDefinedError('REDIS_URL');
  }
  if (process.env.ICE_CHANNEL_ID === undefined) {
    throw new ConfigParameterNotDefinedError('ICE_CHANNEL_ID');
  }

  let schedule;

  const databaseService = new RedisService(process.env.REDIS_URL);

  try {
    schedule = await databaseService.getDb(process.env.ICE_CHANNEL_ID);
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
    body: schedule,
  };
};
