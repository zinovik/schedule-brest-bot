import * as dotenv from 'dotenv';
import { createClient, ClientOpts } from 'redis';

dotenv.config();

const redisUrl = process.env.REDIS_URL && (process.env.REDIS_URL.split('redis://')[1] || process.env.REDIS_URL);
const redisPassword = redisUrl && redisUrl.split('@')[0];

const client = createClient(process.env.REDIS_URL || '', {
  auth_pass: redisPassword,
} as ClientOpts);

export const getDb = (type: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(type, (err: any, reply: string) => {

      if (err) {
        return reject(err);
      }

      resolve(reply);

    });
  });
};

export const setDb = (type: string, schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(type, schedule, (err: any, reply: string) => {

      if (err) {
        return reject(err);
      }

      resolve(reply);

    });
  });
};
