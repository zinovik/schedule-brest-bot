export interface IRoute {
  route: string;
  platform: string;
  regularity: string;
  departmentAS: string;
  departmentTU: string;
  arrival: string;
  departmentBack: string;
  arrivalBack: string;
}

export interface ITransportSchedule {
  title: string;
  // subTitle: string;
  // additionalInfo: string;
  schedules: IRoute[];
}
