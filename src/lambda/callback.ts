import 'babel-polyfill';

import * as dotenv from 'dotenv';

import { ConfigParameterNotDefinedError } from './error/ConfigParameterNotDefinedError';
import { VoteService } from '../vote/Vote.service';
import { TelegramService } from './../telegram/Telegram.service';
import { IEvent } from './model/IEvent.interface';

dotenv.config();

// TODO: Add request for monitoring

exports.handler = async ({ body }: IEvent, context: never) => {
  if (process.env.TOKEN === undefined) {
    throw new ConfigParameterNotDefinedError('TOKEN');
  }

  const voteService = new VoteService(new TelegramService(process.env.TOKEN));

  try {
    await voteService.processMessage(body);
  } catch (error) {
    console.error('Unexpected error occurred.', error.message);
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      result: 'success',
    }),
  };
};
