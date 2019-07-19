export interface ITime {
  start: string;
  session?: string;
  tracks?: string;
}

export interface IDay {
  date?: string;
  dayOfWeek: string;
  times: ITime[];
}

export interface ISportSchedule {
  title: string;
  subTitle: string;
  additionalInfo: string;
  schedules: IDay[];
}
