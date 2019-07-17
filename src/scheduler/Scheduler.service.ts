import * as dotenv from 'dotenv';

import * as brestIce from '../schedules/brest-ice';
import * as brestDvvs from '../schedules/brest-dvvs';

import { getDaysOfWeekButtons } from '../language/Language.service';
import { TelegramService } from '../telegram/Telegram.service';
import { ISchedules } from '../schedules/ISchedules.interface';

dotenv.config();

const commonScheduler = async ({
  getScheduleSite,
  getScheduleDb,
  setScheduleDb,
  formatSchedule,
  getDifference,
  channelId,
}: {
  getScheduleSite: () => Promise<ISchedules>;
  getScheduleDb: () => Promise<string>;
  setScheduleDb: (schedule: string) => Promise<string>;
  formatSchedule: (schedule: ISchedules) => string;
  getDifference: (oldSchedule: ISchedules, newSchedule: ISchedules) => string;
  channelId: number;
}): Promise<string> => {
  const scheduleDb = await getScheduleDb();
  const scheduleSite = await getScheduleSite();

  if (!scheduleSite) {
    return 'Error. No schedule from the site';
  }

  const scheduleSiteJSON = JSON.stringify(scheduleSite);

  if (scheduleDb !== scheduleSiteJSON) {
    const scheduleFormatted = formatSchedule(scheduleSite);

    await setScheduleDb(scheduleSiteJSON);

    const telegramService = new TelegramService(process.env.TOKEN as string);
    await telegramService.sendMessage({
      text: scheduleFormatted,
      replyMarkup: getDaysOfWeekButtons(0, 0, 0, 0, 0, 0, 0),
      chatId: channelId,
    });

    const difference = getDifference(JSON.parse(scheduleDb), scheduleSite);

    if (difference) {
      await telegramService.sendMessage({
        text: difference,
        replyMarkup: '',
        chatId: channelId,
      });
    }

    return scheduleFormatted;
  }

  return 'Done. No new schedule from the site';
};

export const checkAndUpdateIce = (): Promise<string> => {
  return commonScheduler({
    getScheduleSite: brestIce.getScheduleSite,
    getScheduleDb: brestIce.getScheduleDb,
    setScheduleDb: brestIce.setScheduleDb,
    formatSchedule: brestIce.formatSchedule,
    getDifference: brestIce.getDifference,
    channelId: Number(process.env.DVVS_CHANNEL_ID) || 0,
  });
};

export const checkAndUpdateDvvs = (): Promise<string> => {
  return commonScheduler({
    getScheduleSite: brestDvvs.getScheduleSite,
    getScheduleDb: brestDvvs.getScheduleDb,
    setScheduleDb: brestDvvs.setScheduleDb,
    formatSchedule: brestDvvs.formatSchedule,
    getDifference: brestDvvs.getDifference,
    channelId: Number(process.env.DVVS_CHANNEL_ID) || 0,
  });
};
