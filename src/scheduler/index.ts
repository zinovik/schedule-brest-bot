import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';

import { DAYS_OF_WEEK_BUTTONS } from '../phrases/phrases-rus';
import { sendMessage } from '../telegram/index';
import { ISchedules } from './schedules.interface';

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
  channelId: string;
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

    await sendMessage(channelId, scheduleFormatted, DAYS_OF_WEEK_BUTTONS);

    const difference = getDifference(JSON.parse(scheduleDb), scheduleSite);

    if (difference) {
      await sendMessage(channelId, difference);
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
    channelId: process.env.ICE_CHANNEL_ID || '',
  });
};

export const checkAndUpdateDvvs = (): Promise<string> => {
  return commonScheduler({
    getScheduleSite: brestDvvs.getScheduleSite,
    getScheduleDb: brestDvvs.getScheduleDb,
    setScheduleDb: brestDvvs.setScheduleDb,
    formatSchedule: brestDvvs.formatSchedule,
    getDifference: brestDvvs.getDifference,
    channelId: process.env.DVVS_CHANNEL_ID || '',
  });
};
