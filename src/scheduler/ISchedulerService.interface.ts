import { IScheduleService } from '../schedules/IScheduleService.interface';

export interface ISchedulerService {
  checkAndUpdateSchedules(scheduleServices: IScheduleService[]): Promise<string[]>;
}
