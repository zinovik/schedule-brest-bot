import { IScheduleService } from '../schedules/IScheduleService.interface';

export interface ISchedulerService {
  checkUpdateAndSendSchedules(
    scheduleServices: IScheduleService[],
    options?: { isIgnoreSend: boolean; isForceSend: boolean },
  ): Promise<string[]>;
}
