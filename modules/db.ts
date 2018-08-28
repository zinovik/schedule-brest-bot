import redis = require('redis');

const SCHEDULE: string = 'schedule';
const SUBSCRIBED_CHAT_IDS: string = 'subscribedChatIds';

const client = redis.createClient(process.env.REDIS_URL);

function getSchedule(): Promise<string> {
  return new Promise((resolve, reject) => {
    client.get(SCHEDULE, (err: string, reply: string) => {
      console.log('getSchedule()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

function setSchedule(schedule: string): Promise<string> {
  return new Promise((resolve, reject) => {
    client.set(SCHEDULE, schedule, (err: string, reply: string) => {
      console.log('setSchedule()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

function getSubscribedChatIds(): Promise<any> {
  return new Promise((resolve, reject) => {
    client.get(SUBSCRIBED_CHAT_IDS, (err: string, reply: string) => {
      console.log('getSubscribedChatIds()', err, reply);
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

function toggleSubscribedChatId(subscribedChatId: string): Promise<boolean> {
  let subscribed: boolean;

  return getSubscribedChatIds()
    .then((subscribedChatIds) => {
      subscribedChatIds[subscribedChatId] = !subscribedChatIds[subscribedChatId];
      subscribed = subscribedChatIds[subscribedChatId];
      return setSubscribedChatIds(subscribedChatIds);
    })
    .then(() => {
      return Promise.resolve(subscribed);
    });
}

function setSubscribedChatIds(subscribedChatIds: any): Promise<string> {
  return new Promise((resolve, reject) => {
    client.set(SUBSCRIBED_CHAT_IDS, JSON.stringify(subscribedChatIds), (err: string, reply: string) => {
      console.log('setSubscribedChatIds()', err, reply);
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
}

export default {
  getSchedule: getSchedule,
  setSchedule: setSchedule,
  getSubscribedChatIds: getSubscribedChatIds,
  toggleSubscribedChatId: toggleSubscribedChatId,
};
