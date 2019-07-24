import { IScheduleService } from '../schedules/IScheduleService.interface';

export interface IScheduler {
  checkUpdateAndSendSchedules(scheduleServices: IScheduleService[], options?: { isIgnoreSend: boolean; isForceSend: boolean }): Promise<string[]>;
}
