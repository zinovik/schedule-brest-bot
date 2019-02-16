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
    const scheduleIceDb = await db.getScheduleIce();

    const scheduleBrestIce = await brestIce.getSchedule();
    const scheduleBrestIceJSON = JSON.stringify(scheduleBrestIce);

    if (scheduleIceDb !== scheduleBrestIceJSON) {
      const scheduleBrestIceFormatted = brestIce.formatSchedule(scheduleBrestIce);

      console.log('New Ice schedule. Sending message...');
      bot.sendMessage(process.env.ICE_CHANNEL_ID, scheduleBrestIceFormatted);

      db.setScheduleIce(scheduleBrestIceJSON);
    }
  } catch (error) {
    console.log(error);
  }

};

export const schedulerDvvs = async (bot: any) => {

  try {
    const scheduleDvvsDb = await db.getScheduleDvvs();

    const scheduleBrestDvvs = await brestDvvs.getSchedule();
    const scheduleBrestDvvsJSON = JSON.stringify(scheduleBrestDvvs);

    if (scheduleDvvsDb !== scheduleBrestDvvsJSON) {
      const scheduleBrestDvvsFormatted = brestDvvs.formatSchedule(scheduleBrestDvvs);

      console.log('New Dvvs schedule. Sending message...');
      bot.sendMessage(process.env.DVVS_CHANNEL_ID, scheduleBrestDvvsFormatted);

      db.setScheduleDvvs(scheduleBrestDvvsJSON);
    }
  } catch (error) {
    console.log(error);
  }

};
