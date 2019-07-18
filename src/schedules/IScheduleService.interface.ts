import { ISchedules } from '../common/model/ISchedules.interface';

export interface IScheduleService {
  getChannelId(): string;
  getChannelLanguageCode(): string;
  getScheduleSite(daysOfWeek?: string[]): Promise<ISchedules>;
  formatSchedule({ title, schedules }: ISchedules, newSchedulePhrase: string): string;
  getDifference(oldSchedule: ISchedules, newSchedule: ISchedules, changesPhrase: string): string;
}
