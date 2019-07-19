import axios from 'axios';
import { DOMParser } from 'xmldom';
import { select, select1 } from 'xpath';

import { ConfigurationError } from './error/ConfigParameterNotDefinedError';
import { BaseService } from './Base.service';
import { ISportSchedule, ITime } from '../common/model/ISportSchedule.interface';
import { IIceConfiguration } from './model/IIceConfiguration.interface';
import { IScheduleService } from './IScheduleService.interface';

export class IceService extends BaseService implements IScheduleService {
  private configuration: IIceConfiguration | undefined;

  constructor(channelId: string, languageCode: string) {
    super(channelId, languageCode);
  }

  setConfiguration(configuration: IIceConfiguration): void {
    this.configuration = configuration;
  }

  async getScheduleSite(): Promise<ISportSchedule> {
    if (!this.configuration) {
      throw new ConfigurationError();
    }

    const { data: page } = await axios.get(this.configuration.url);

    return this.parseSchedule(page);
  }

  private parseSchedule(page: string): ISportSchedule {
    if (!this.configuration) {
      throw new ConfigurationError();
    }

    const dom = new DOMParser({
      errorHandler: {
        warning: () => null,
        error: () => null,
        fatalError: () => null,
      },
    }).parseFromString(page.replace(new RegExp('<s*html[^>]*>', 'gi'), '<html>'));

    const title = (select1(this.configuration.xPathTitle, dom) as Node).textContent!.trim();
    const subTitle = (select1(this.configuration.xPathSubTitle, dom) as Node).textContent!.trim();

    const dates = this.selectPart(this.configuration.xPathDates, dom, 0, this.configuration.days);
    const daysOfWeek = this.selectPart(this.configuration.xPathDaysOfWeek, dom, 0, this.configuration.days - 1);
    const timesLines = this.selectPart(this.configuration.xPathTimesLines, dom, 0, this.configuration.days - 1);

    return {
      title,
      subTitle,
      additionalInfo: '',
      schedules: Array.from({ length: this.configuration.days }, (_: never, index) => {
        return {
          date: dates[index],
          dayOfWeek: daysOfWeek[index],
          times: this.timesLineToTimes(timesLines[index]),
        };
      }),
    };
  }

  private selectPart(xPath: string, dom: Document, firstElementNumber: number, lastElementNumber: number): string[] {
    return select(xPath, dom)
      .filter((_, index) => index >= firstElementNumber && index <= lastElementNumber)
      .map(selectedValue => (selectedValue as Node).textContent!.trim());
  }

  formatSchedule({ title, subTitle, schedules }: ISportSchedule, newSchedulePhrase: string): string {
    let scheduleFormatted = `${newSchedulePhrase}\n\n${title}\n${subTitle}\n`;

    schedules.forEach(schedule => {
      const daySchedule = `${schedule.date}, ${schedule.dayOfWeek}: ${this.timesToTimesLine(schedule.times)}`;

      scheduleFormatted = `${scheduleFormatted}\n${daySchedule}`;
    });

    return scheduleFormatted;
  }

  getDifference(oldSchedule: ISportSchedule, newSchedule: ISportSchedule, changesPhrase: string): string {
    if (newSchedule.schedules[0].date === oldSchedule.schedules[0].date) {
      return '';
    }

    let result = `${changesPhrase}\n`;

    for (let i = 0; i < newSchedule.schedules.length; i += 1) {
      const oldTimesLine = this.timesToTimesLine(oldSchedule.schedules[i].times);
      const newTimesLine = this.timesToTimesLine(newSchedule.schedules[i].times);

      if (newTimesLine !== oldTimesLine) {
        result = `${result}\n${newSchedule.schedules[i].date}: ${oldTimesLine} → ${newTimesLine}`;
      }
    }

    return result;
  }

  private timesLineToTimes(timeLine: string): ITime[] {
    return timeLine.split(',').map(timeLine => ({ start: timeLine.trim() }));
  }

  private timesToTimesLine(times: ITime[]): string {
    return times.map(time => time.start).join(', ');
  }
}
