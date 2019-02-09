import redis = require('redis');

const SCHEDULE_ICE: string = 'scheduleIce';
const SCHEDULE_DVVS: string = 'scheduleDvvs';

const client = redis.createClient(process.env.REDIS_URL);

export const getScheduleIce = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_ICE, (err: Error, reply: string) => {
      console.log('getScheduleIce()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setScheduleIce = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_ICE, schedule, (err: Error, reply: string) => {
      console.log('setScheduleIce()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const getScheduleDvvs = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_DVVS, (err: Error, reply: string) => {
      console.log('getScheduleDvvs()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setScheduleDvvs = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_DVVS, schedule, (err: Error, reply: string) => {
      console.log('setScheduleDvvs()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};
