import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';

import { getScheduleDb, setScheduleDb, SCHEDULE_ICE, SCHEDULE_DVVS } from '../db';
// import { DAYS_OF_WEEK_BUTTONS } from '../phrases/phrases-rus';
import { ISchedules } from './schedules.interface';

const commonScheduler = ({
  bot,
  type,
  getSchedule,
  formatSchedule,
  getDifference,
  channelId,
}: {
  bot: { sendMessage: (channelId: string, text: string) => Promise<void> };
  type: string;
  getSchedule: () => Promise<ISchedules>;
  formatSchedule: (schedule: ISchedules) => string;
  getDifference: (oldSchedule: ISchedules, newSchedule: ISchedules) => string;
  channelId: string;
}): Promise<boolean> => {

  let scheduleDb: string;
  let scheduleSite: ISchedules;
  let scheduleSiteJSON: string;
  let isUpdatingSchedule: boolean;

  return Promise.all([
    getScheduleDb(type),
    getSchedule(),
  ])
    .then(([
      resultScheduleDb,
      resultScheduleSite,
    ]): any => {
      scheduleDb = resultScheduleDb;
      scheduleSite = resultScheduleSite;

      if (!scheduleSite) {
        throw new Error();
      }

      scheduleSiteJSON = JSON.stringify(scheduleSite);

      if (scheduleDb !== scheduleSiteJSON) {
        isUpdatingSchedule = true;

        const scheduleFormatted = formatSchedule(scheduleSite);

        console.log(`New ${type} schedule. Sending message...`);
        // await bot.sendMessage(channelId, scheduleFormatted, DAYS_OF_WEEK_BUTTONS);
        return bot.sendMessage(channelId, scheduleFormatted);
      }
    })
    .then(() => {
      if (isUpdatingSchedule) {
        return setScheduleDb(type, scheduleSiteJSON);
      }
      return '';
    })
    .then(() => {
      if (isUpdatingSchedule) {
        const difference = getDifference(JSON.parse(scheduleDb), scheduleSite);

        if (difference) {
          // return bot.sendMessage(channelId, difference); // Bad Request: message is too long
        }
      }
    })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const schedulerIce = (bot: { sendMessage: (channelId: string, text: string) => Promise<void> }): Promise<boolean> => {
  return commonScheduler({
    bot,
    type: SCHEDULE_ICE,
    getSchedule: brestIce.getSchedule,
    formatSchedule: brestIce.formatSchedule,
    getDifference: brestIce.getDifference,
    channelId: process.env.ICE_CHANNEL_ID || '',
  });
};

export const schedulerDvvs = (bot: { sendMessage: (channelId: string, text: string) => Promise<void> }): Promise<boolean> => {
  return commonScheduler({
    bot,
    type: SCHEDULE_DVVS,
    getSchedule: brestDvvs.getSchedule,
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
