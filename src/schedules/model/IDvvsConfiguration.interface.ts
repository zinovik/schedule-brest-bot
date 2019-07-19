export interface IDvvsConfiguration {
  url: string;
  firstTime: number;
  lastTime: number;
  timeShift: number;

  xPathTitle: string;
  xPathSubTitle: string;
  xPathAdditionalInfo: string;
  xPathTimesStart: string;
  xPathSessions: string;
  xPathTracks: string[];
}
