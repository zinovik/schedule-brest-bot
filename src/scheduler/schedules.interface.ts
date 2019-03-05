export interface Time {
  start: string;
  session: string;
  tracks: string;
}

export interface ISchedule {
  day?: string;
  dayOfWeek: string;
  times: Time[];
}

export interface ISchedules {
  title: string;
  schedules: ISchedule[];
}
