export interface IDatabaseService {
  getDb(name: string): Promise<string>;
  setDb(name: string, schedule: string): Promise<string>;
}
