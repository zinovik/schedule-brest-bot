import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';

// import { DAYS_OF_WEEK_BUTTONS } from '../phrases/phrases-rus';
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

    // await sendMessage(channelId, scheduleFormatted, DAYS_OF_WEEK_BUTTONS);
    await sendMessage(channelId, scheduleFormatted);

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

// export const addCallback = (bot: { sendMessage: (channelId: string, text: string) => Promise<void> }) => {
//   bot.on('callback_query', (callbackQuery) => {
//     if (!callbackQuery.message) {
//       return;
//     }

//     let text = callbackQuery.message.text || '';

//     switch (callbackQuery.data) {
//       case 'monday':
//         text += '\nПН';
//         break;
//       case 'tuesday':
//         text += '\nВТ';
//         break;
//       case 'wednesday':
//         text += '\nСР';
//         break;
//       case 'thursday':
//         text += '\nЧТ';
//         break;
//       case 'friday':
//         text += '\nПТ';
//         break;
//       case 'saturday':
//         text += '\nСБ';
//         break;
//       case 'sunday':
//         text += '\nВС';
//         break;
//     }

//     bot.editMessageText(text, {
//       ...DAYS_OF_WEEK_BUTTONS,
//       chat_id: callbackQuery.message.chat.id,
//       message_id: callbackQuery.message.message_id,
//     });
//   });
// };
