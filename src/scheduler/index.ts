import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';
import * as db from './db';

export const scheduler = (bot: any) => Promise.all([
  brestIce.getSchedule(),
  db.getScheduleIce(),
  brestDvvs.getSchedule(),
  db.getScheduleDvvs(),
])
  .then(([
    scheduleBrestIce,
    scheduleIceDb,
    scheduleBrestDvvs,
    scheduleDvvsDb,
  ]) => {

    if (scheduleIceDb !== scheduleBrestIce) {
      console.log('New Ice schedule. Sending message...');
      bot.sendMessage(process.env.ICE_CHANNEL_ID, scheduleBrestIce);
      db.setScheduleIce(scheduleBrestIce);
    }

    if (scheduleDvvsDb !== scheduleBrestDvvs) {
      console.log('New Dvvs schedule. Sending message...');
      bot.sendMessage(process.env.DVVS_CHANNEL_ID, scheduleBrestDvvs);
      db.setScheduleDvvs(scheduleBrestDvvs);
    }

  })
  .catch((error) => {
    console.log(error);
  });
