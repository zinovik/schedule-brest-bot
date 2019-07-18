import axios from 'axios';
import { DOMParser } from 'xmldom';
import { select } from 'xpath';

import { BaseService } from './Base.service';
import { ISchedules, ITime } from '../common/model/ISchedules.interface';

const URL = 'http://brest-hockey.by/';

const DAYS = 9;

const XPATH_DAYS = '//td[1]';
const XPATH_DAYS_OF_WEEK = '//td[2]';
const XPATH_TIMES_LINES = '//td[3]';

import { IScheduleService } from './IScheduleService.interface';

export class IceService extends BaseService implements IScheduleService {
  constructor(channelId: string, languageCode: string) {
    super(channelId, languageCode);
  }

  async getScheduleSite(): Promise<ISchedules> {
    const { data: page } = await axios.get(URL);

    const { title, schedules } = this.parseSchedule(page);

    return { title, schedules };
  }

  private parseSchedule(page: string): ISchedules {
    const domNew = new DOMParser().parseFromString(page.replace(new RegExp('<s*html[^>]*>', 'gi'), '<html>'));

    const days = this.selectPart(XPATH_DAYS, domNew, 0, DAYS);
    const daysOfWeek = this.selectPart(XPATH_DAYS_OF_WEEK, domNew, 0, DAYS);
    const timesLines = this.selectPart(XPATH_TIMES_LINES, domNew, 0, DAYS);

    return {
      title: '',
      schedules: Array.from({ length: DAYS }, (_: never, index) => {
        return {
          day: days[index],
          dayOfWeek: daysOfWeek[index],
          times: this.timesLineToTimes(timesLines[index]),
        };
      }),
    };
  }

  private selectPart(xpath: string, dom: Document, firstElementNumber: number, lastElementNumber: number): string[] {
    return select(xpath, dom)
      .filter((_, index) => index >= firstElementNumber && index <= lastElementNumber)
      .map(selectedValue => (selectedValue as Node).textContent!.trim());
  }

  formatSchedule({ title, schedules }: ISchedules, newSchedulePhrase: string): string {
    let scheduleFormatted = `${newSchedulePhrase}${title}`;

    schedules.forEach(schedule => {
      const daySchedule = `${schedule.day}, ${schedule.dayOfWeek}: ${this.timesToTimesLine(schedule.times)}`;

      scheduleFormatted = `${scheduleFormatted}\n${daySchedule}`;
    });

    return scheduleFormatted;
  }

  getDifference(oldSchedule: ISchedules, newSchedule: ISchedules, changesPhrase: string): string {
    if (newSchedule.schedules[0].day !== oldSchedule.schedules[0].day) {
      return '';
    }

    let result = changesPhrase;

    for (let i = 0; i < newSchedule.schedules.length; i += 1) {
      const oldTimesLine = this.timesToTimesLine(oldSchedule.schedules[i].times);
      const newTimesLine = this.timesToTimesLine(newSchedule.schedules[i].times);

      if (newTimesLine !== oldTimesLine) {
        result = `${result}\n${newSchedule.schedules[i].day}: ${oldTimesLine} → ${newTimesLine}`;
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
