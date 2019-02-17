import redis = require('redis');

export const SCHEDULE_ICE: string = 'scheduleIce';
export const SCHEDULE_DVVS: string = 'scheduleDvvs';

const client = redis.createClient(process.env.REDIS_URL);

export const getSchedule = (type: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(type, (err: Error, reply: string) => {
      console.log(`get ${type}`, err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setSchedule = (type: string, schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(type, schedule, (err: Error, reply: string) => {
      console.log(`set ${type}`, err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};
