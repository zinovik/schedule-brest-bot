import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';
import * as db from '../db';

export const setEndpoints = (app: any) => {
  app.get('/icebrest', async (req, res) => {
    const scheduleIceDb = await db.getScheduleIce();

    return res.status(200).send(scheduleIceDb);
  });

  app.get('/dvvsbrest', async (req, res) => {
    const scheduleDvvsDb = await db.getScheduleDvvs();

    return res.status(200).send(scheduleDvvsDb);
  });
};

export const schedulerIce = async (bot: any) => {

  try {
    const scheduleBrestIce = await brestIce.getSchedule();
    const scheduleIceDb = await db.getScheduleIce();

    if (scheduleIceDb !== scheduleBrestIce) {
      console.log('New Ice schedule. Sending message...');
      bot.sendMessage(process.env.ICE_CHANNEL_ID, scheduleBrestIce);
      db.setScheduleIce(scheduleBrestIce);
    }
  } catch (error) {
    console.log(error);
  }

};

export const schedulerDvvs = async (bot: any) => {

  try {
    const scheduleBrestDvvs = await brestDvvs.getSchedule();
    const scheduleDvvsDb = await db.getScheduleDvvs();

    if (scheduleDvvsDb !== scheduleBrestDvvs) {
      console.log('New Dvvs schedule. Sending message...');
      bot.sendMessage(process.env.DVVS_CHANNEL_ID, scheduleBrestDvvs);
      db.setScheduleDvvs(scheduleBrestDvvs);
    }
  } catch (error) {
    console.log(error);
  }

};
