export interface ITime {
  start: string;
  session?: string;
  tracks?: string;
}

export interface ISchedule {
  day?: string;
  dayOfWeek: string;
  times: ITime[];
}

export interface ISchedules {
  title: string;
  // subTitle: string;
  // additionalInfo: string;
  schedules: ISchedule[];
}
