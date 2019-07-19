import { ConfigurationType } from './model/Configuration.type';
import { ScheduleType } from '../common/model/Schedule.type';

export interface IScheduleService {
  getChannelId(): string;
  getChannelLanguageCode(): string;
  setConfiguration(configurationType: ConfigurationType): void;
  getScheduleSite(daysOfWeek?: string[]): Promise<ScheduleType>;
  formatSchedule({ title, schedules }: ScheduleType, newSchedulePhrase: string): string;
  getDifference(oldSchedule: ScheduleType, newSchedule: ScheduleType, changesPhrase: string): string;
}
