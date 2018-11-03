import redis = require('redis');

const SCHEDULE_SKATES: string = 'scheduleSkates';
const SUBSCRIBED_SKATES_CHAT_IDS: string = 'subscribedSkatesChatIds';
const SCHEDULE_POOL: string = 'schedulePool';
const SUBSCRIBED_POOL_CHAT_IDS: string = 'subscribedPoolChatIds';

const client = redis.createClient(process.env.REDIS_URL);

const getScheduleSkates = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_SKATES, (err: string, reply: string) => {
      console.log('getScheduleSkates()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

const setScheduleSkates = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_SKATES, schedule, (err: string, reply: string) => {
      console.log('setScheduleSkates()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

const getSubscribedSkatesChatIds = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    client.get(SUBSCRIBED_SKATES_CHAT_IDS, (err: string, reply: string) => {
      console.log('getSubscribedSkatesChatIds()', err, reply);
      if (err) {
        reject(err);
      }
      if (reply) {
        return resolve(JSON.parse(reply));
      }
      resolve({});
    });
  });
}

const toggleSubscribedSkatesChatId = (subscribedChatId: string): Promise<boolean> => {
  let subscribed: boolean;

  return getSubscribedSkatesChatIds()
    .then((subscribedChatIds) => {
      subscribedChatIds[subscribedChatId] = !subscribedChatIds[subscribedChatId];
      subscribed = subscribedChatIds[subscribedChatId];
      return setSubscribedSkatesChatIds(subscribedChatIds);
    })
    .then(() => {
      return Promise.resolve(subscribed);
    });
}

const setSubscribedSkatesChatIds = (subscribedChatIds: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SUBSCRIBED_SKATES_CHAT_IDS, JSON.stringify(subscribedChatIds), (err: string, reply: string) => {
      console.log('setSubscribedSkatesChatIds()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

const getSchedulePool = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE_POOL, (err: string, reply: string) => {
      console.log('getSchedulePool()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

const setSchedulePool = (schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE_POOL, schedule, (err: string, reply: string) => {
      console.log('setSchedulePool()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

const getSubscribedPoolChatIds = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    client.get(SUBSCRIBED_POOL_CHAT_IDS, (err: string, reply: string) => {
      console.log('getSubscribedPoolChatIds()', err, reply);
      if (err) {
        reject(err);
      }
      if (reply) {
        return resolve(JSON.parse(reply));
      }
      resolve({});
    });
  });
}

const toggleSubscribedPoolChatId = (subscribedChatId: string): Promise<boolean> => {
  let subscribed: boolean;

  return getSubscribedPoolChatIds()
    .then((subscribedChatIds) => {
      subscribedChatIds[subscribedChatId] = !subscribedChatIds[subscribedChatId];
      subscribed = subscribedChatIds[subscribedChatId];
      return setSubscribedPoolChatIds(subscribedChatIds);
    })
    .then(() => {
      return Promise.resolve(subscribed);
    });
}

const setSubscribedPoolChatIds = (subscribedChatIds: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(SUBSCRIBED_POOL_CHAT_IDS, JSON.stringify(subscribedChatIds), (err: string, reply: string) => {
      console.log('setSubscribedPoolChatIds()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

export default {
  getScheduleSkates: getScheduleSkates,
  setScheduleSkates: setScheduleSkates,
  getSubscribedSkatesChatIds: getSubscribedSkatesChatIds,
  toggleSubscribedSkatesChatId: toggleSubscribedSkatesChatId,
  getSchedulePool: getSchedulePool,
  setSchedulePool: setSchedulePool,
  getSubscribedPoolChatIds: getSubscribedPoolChatIds,
  toggleSubscribedPoolChatId: toggleSubscribedPoolChatId,
};
