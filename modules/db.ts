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

export const getSubscribedSkatesChatIds = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    client.get(SUBSCRIBED_SKATES_CHAT_IDS, (err: Error, reply: string) => {
      console.log('getSubscribedSkatesChatIds()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(reply || '{}'));
    });
  });
};

export const toggleSubscribedSkatesChatId = (id: number): Promise<boolean> => {
  let subscribed: boolean;

  return getSubscribedSkatesChatIds()
    .then((ids) => {
      ids[id] = !ids[id];
      subscribed = ids[id];
      return setSubscribedSkatesChatIds(ids);
    })
    .then(() => {
      return Promise.resolve(subscribed);
    });
};

export const setSubscribedSkatesChatIds = (ids: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SUBSCRIBED_SKATES_CHAT_IDS, JSON.stringify(ids), (err: Error, reply: string) => {
      console.log('setSubscribedSkatesChatIds()', err, reply);
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

export const getSubscribedPoolChatIds = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    client.get(SUBSCRIBED_POOL_CHAT_IDS, (err: Error, reply: string) => {
      console.log('getSubscribedPoolChatIds()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(reply || '{}'));
    });
  });
};

export const toggleSubscribedPoolChatId = (id: number): Promise<boolean> => {
  let subscribed: boolean;

  return getSubscribedPoolChatIds()
    .then((ids) => {
      ids[id] = !ids[id];
      subscribed = ids[id];
      return setSubscribedPoolChatIds(ids);
    })
    .then(() => {
      return Promise.resolve(subscribed);
    });
};

export const setSubscribedPoolChatIds = (ids: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SUBSCRIBED_POOL_CHAT_IDS, JSON.stringify(ids), (err: Error, reply: string) => {
      console.log('setSubscribedPoolChatIds()', err, reply);
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};
