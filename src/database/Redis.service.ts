import { createClient, RedisClient } from 'redis';

import { IDatabaseService } from './IDatabaseService.interface';

export class RedisService implements IDatabaseService {
  private redisPassword: string;
  private client: RedisClient;

  constructor(private redisUrl: string) {
    this.redisUrl = redisUrl;
    this.redisPassword = redisUrl.replace('redis://', '').split('@')[0];

    this.client = createClient(redisUrl, { auth_pass: this.redisPassword });
  }

  async getDb(name: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.get(name, (err: any, reply: string) => {
        if (err) {
          return reject(err);
        }

        resolve(reply);
      });
    });
  }

  async setDb(name: string, schedule: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.set(name, schedule, (err: any, reply: string) => {
        if (err) {
          return reject(err);
        }

        resolve(reply);
      });
    });
  }
}
