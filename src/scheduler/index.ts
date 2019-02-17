import * as brestIce from './brest-ice';
import * as brestDvvs from './brest-dvvs';
import {
  getSchedule,
  setSchedule,
  SCHEDULE_ICE,
  SCHEDULE_DVVS,
} from '../db';

export const setIceBrestEndpoint = (app: any) => {
  app.get('/icebrest', async (req, res) => {
    const scheduleIceDb = await getSchedule(SCHEDULE_ICE);
    return res.status(200).send(scheduleIceDb);
  });
};

export const setDvvsBrestEndpoint = (app: any) => {
  app.get('/dvvsbrest', async (req, res) => {
    const scheduleDvvsDb = await getSchedule(SCHEDULE_DVVS);
    return res.status(200).send(scheduleDvvsDb);
  });
};

export const schedulerIce = async (bot: any) => {
  try {
    const scheduleIceDb = await getSchedule(SCHEDULE_ICE);

    const scheduleBrestIce = await brestIce.getSchedule();
    const scheduleBrestIceJSON = JSON.stringify(scheduleBrestIce);

    if (scheduleIceDb !== scheduleBrestIceJSON) {
      const scheduleBrestIceFormatted = brestIce.formatSchedule(scheduleBrestIce);

      console.log('New Ice schedule. Sending message...');
      bot.sendMessage(process.env.ICE_CHANNEL_ID, scheduleBrestIceFormatted);

      setSchedule(SCHEDULE_ICE, scheduleBrestIceJSON);
    }
  } catch (error) {
    console.log(error);
  }
};

export const schedulerDvvs = async (bot: any) => {
  try {
    const scheduleDvvsDb = await getSchedule(SCHEDULE_DVVS);

    const scheduleBrestDvvs = await brestDvvs.getSchedule();
    const scheduleBrestDvvsJSON = JSON.stringify(scheduleBrestDvvs);

    if (scheduleDvvsDb !== scheduleBrestDvvsJSON) {
      const scheduleBrestDvvsFormatted = brestDvvs.formatSchedule(scheduleBrestDvvs);

      console.log('New Dvvs schedule. Sending message...');
      bot.sendMessage(process.env.DVVS_CHANNEL_ID, scheduleBrestDvvsFormatted);

      setSchedule(SCHEDULE_DVVS, scheduleBrestDvvsJSON);
    }
  } catch (error) {
    console.log(error);
  }
};
