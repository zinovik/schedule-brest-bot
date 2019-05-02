import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';
import * as TelegramBot from 'node-telegram-bot-api';

import { getScheduleDb, setScheduleDb, SCHEDULE_ICE, SCHEDULE_DVVS } from '../db';
import { DAYS_OF_WEEK_BUTTONS } from '../phrases/phrases-rus';
import { ISchedules } from './schedules.interface';

export const setIceBrestEndpoint = (app: any) => {
  app.get('/icebrest', async (req: Request, res: any) => {
    const scheduleIceDb = await getScheduleDb(SCHEDULE_ICE);
    return res.status(200).send(scheduleIceDb);
  });
};

export const setDvvsBrestEndpoint = (app: any) => {
  app.get('/dvvsbrest', async (req: Request, res: any) => {
    const scheduleDvvsDb = await getScheduleDb(SCHEDULE_DVVS);
    return res.status(200).send(scheduleDvvsDb);
  });
};

const commonScheduler = async ({
  bot,
  type,
  getSchedule,
  formatSchedule,
  getDifference,
  channelId,
}: {
  bot: TelegramBot;
  type: string;
  getSchedule: () => Promise<ISchedules>;
  formatSchedule: (schedule: ISchedules) => string;
  getDifference: (oldSchedule: ISchedules, newSchedule: ISchedules) => string,
  channelId: string;
}): Promise<boolean> => {
  const scheduleDb = await getScheduleDb(type);

  let scheduleSite: ISchedules = {
    title: '',
    schedules: [],
  };

  try {
    scheduleSite = await getSchedule();
  } catch (error) {
    console.log(`Error fetching schedule: ${type}`);
    return false;
  }

  if (!scheduleSite) {
    return false;
  }

  const scheduleSiteJSON = JSON.stringify(scheduleSite);

  if (scheduleDb !== scheduleSiteJSON) {
    let scheduleFormatted = '';

    try {
      scheduleFormatted = formatSchedule(scheduleSite);
    } catch (error) {
      console.log('Error formatting brest ice schedule');
      return false;
    }

    console.log(`New ${type} schedule. Sending message...`);
    bot.sendMessage(channelId, scheduleFormatted, DAYS_OF_WEEK_BUTTONS);

    const difference = getDifference(JSON.parse(scheduleDb), scheduleSite);
    if (difference) {
      setTimeout(() => bot.sendMessage(channelId, difference), 1000);
    }

    setScheduleDb(type, scheduleSiteJSON);
  }

  return true;
};

export const schedulerIce = async (bot: TelegramBot) => {
  return await commonScheduler({
    bot,
    type: SCHEDULE_ICE,
    getSchedule: brestIce.getSchedule,
    formatSchedule: brestIce.formatSchedule,
    getDifference: brestIce.getDifference,
    channelId: process.env.ICE_CHANNEL_ID || '',
  });
};

export const schedulerDvvs = async (bot: TelegramBot): Promise<boolean> => {
  return await commonScheduler({
    bot,
    type: SCHEDULE_DVVS,
    getSchedule: brestDvvs.getSchedule,
    formatSchedule: brestDvvs.formatSchedule,
    getDifference: brestDvvs.getDifference,
    channelId: process.env.DVVS_CHANNEL_ID || '',
  });
};

export const addCallback = (bot: TelegramBot) => {
  bot.on('callback_query', (callbackQuery) => {
    if (!callbackQuery.message) {
      return;
    }

    let text = callbackQuery.message.text || '';

    switch (callbackQuery.data) {
      case 'monday':
        text += '\nПН';
        break;
      case 'tuesday':
        text += '\nВТ';
        break;
      case 'wednesday':
        text += '\nСР';
        break;
      case 'thursday':
        text += '\nЧТ';
        break;
      case 'friday':
        text += '\nПТ';
        break;
      case 'saturday':
        text += '\nСБ';
        break;
      case 'sunday':
        text += '\nВС';
        break;
    }

    bot.editMessageText(text, {
      ...DAYS_OF_WEEK_BUTTONS,
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
    });
  });
};
