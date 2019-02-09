import redis = require('redis');

const SCHEDULE_SKATES: string = 'scheduleSkates';
const SUBSCRIBED_SKATES_CHAT_IDS: string = 'subscribedSkatesChatIds';
const SCHEDULE_POOL: string = 'schedulePool';
const SUBSCRIBED_POOL_CHAT_IDS: string = 'subscribedPoolChatIds';

const client = redis.createClient(process.env.REDIS_URL);

export const getScheduleSkates = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_SKATES, (err: Error, reply: string) => {
      console.log('getScheduleSkates()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setScheduleSkates = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_SKATES, schedule, (err: Error, reply: string) => {
      console.log('setScheduleSkates()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const getSchedulePool = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_POOL, (err: Error, reply: string) => {
      console.log('getSchedulePool()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setSchedulePool = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_POOL, schedule, (err: Error, reply: string) => {
      console.log('setSchedulePool()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};
