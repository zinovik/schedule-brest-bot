import axios from 'axios';
import { DOMParser } from 'xmldom';
import { select, select1 } from 'xpath';

import { ConfigurationError } from './error/ConfigParameterNotDefinedError';
import { BaseService } from './Base.service';
import { ISportSchedule, ITime } from '../common/model/ISportSchedule.interface';
import { IDvvsConfiguration } from './model/IDvvsConfiguration.interface';
import { IScheduleService } from './IScheduleService.interface';

export class DvvsService extends BaseService implements IScheduleService {
  private configuration: IDvvsConfiguration | undefined;

  constructor(channelId: string, languageCode: string) {
    super(channelId, languageCode);
  }

  setConfiguration(configuration: IDvvsConfiguration): void {
    this.configuration = configuration;
  }

  async getScheduleSite(daysOfWeek: string[] = []): Promise<ISportSchedule> {
    if (!this.configuration) {
      throw new ConfigurationError();
    }

    const { data: page } = await axios.get(this.configuration.url);

    return this.parseSchedule(page, daysOfWeek);
  }

  private parseSchedule(page: string, daysOfWeek: string[]): any {
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

    const timesStart = this.selectPart(
      this.configuration.xPathTimesStart,
      dom,
      this.configuration.firstTime + this.configuration.timeShift,
      this.configuration.lastTime + this.configuration.timeShift,
    );
    const sessions = this.selectPart(
      this.configuration.xPathSessions,
      dom,
      this.configuration.firstTime,
      this.configuration.lastTime,
    );
    const tracksByDays = this.configuration.xPathTracks.map(tracks => {
      if (!this.configuration) {
        return [];
      }

      return this.selectPart(tracks, dom, this.configuration.firstTime, this.configuration.lastTime);
    });

    return {
      title,
      subTitle,
      additionalInfo: '',
      schedules: tracksByDays.map((tracks, index) => {
        return {
          dayOfWeek: daysOfWeek[index],
          times: timesStart.map((timeStart, index) => {
            return {
              start: timeStart,
              tracks: tracks[index],
              session: sessions[index],
            };
          }),
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
      scheduleFormatted = `${scheduleFormatted}\n${schedule.dayOfWeek}\n`;

      schedule.times.forEach(({ tracks, start, session }: ITime) => {
        if (tracks !== '-') {
          scheduleFormatted = `${scheduleFormatted}${start}`;

          if (session) {
            scheduleFormatted = `${scheduleFormatted}   (${session})`;
          }

          if (tracks) {
            scheduleFormatted = `${scheduleFormatted}   ${tracks}\n`;
          }
        }
      });
    });

    return scheduleFormatted;
  }

  getDifference(oldSchedule: ISportSchedule, newSchedule: ISportSchedule, changesPhrase: string): string {
    if (newSchedule.subTitle === oldSchedule.subTitle) {
      return '';
    }

    let result = `${changesPhrase}\n`;

    for (let i = 0; i < newSchedule.schedules.length; i += 1) {
      const newS = newSchedule.schedules[i];
      const oldS = oldSchedule.schedules[i];

      for (let j = 0; j < newS.times.length; j += 1) {
        const oldTracks = oldS.times[j].tracks === '-' ? '0' : oldS.times[j].tracks;
        const newTracks = newS.times[j].tracks === '-' ? '0' : newS.times[j].tracks;

        if (newTracks !== oldTracks) {
          result = `${result}\n${newS.dayOfWeek}: ${newS.times[j].start} (${
            newS.times[j].session
          }) ${oldTracks} → ${newTracks}`;
        }
      }
    }

    return result;
  }
}
