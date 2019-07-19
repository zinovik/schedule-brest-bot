export interface IDatabaseService {
  getSchedule(name: string): Promise<string>;
  setSchedule(name: string, schedule: string): Promise<string>;
}
