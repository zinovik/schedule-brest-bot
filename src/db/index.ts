import * as dotenv from 'dotenv';
import { createClient, ClientOpts } from 'redis';

dotenv.config();

export const SCHEDULE_ICE: string = 'scheduleIce';
export const SCHEDULE_DVVS: string = 'scheduleDvvs';

const client = createClient(process.env.REDIS_URL || '', {
  no_ready_check: true,
} as ClientOpts);

export const getScheduleDb = (type: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.get(type, (err: any, reply: string) => {
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};

export const setScheduleDb = (type: string, schedule: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    client.set(type, schedule, (err: any, reply: string) => {
      if (err) {
        return reject(err);
      }
      resolve(reply);
    });
  });
};
