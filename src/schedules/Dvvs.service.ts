import axios from 'axios';
import { DOMParser } from 'xmldom';
import { select, select1 } from 'xpath';

import { BaseService } from './Base.service';
import { ISchedules, ITime } from '../common/model/ISchedules.interface';

const URL = 'http://brest-dvvs.by/sched/';
const XPATH_TITLE = '//font//b';
const XPATH_DATES = '//font[contains(@size, "5")]';

const XPATH_TIMES_START = '//td[1]';
const XPATH_SESSIONS = '//td[2]';

const XPATH_TRACKS_MONDAY = '//td[3]';
const XPATH_TRACKS_TUESDAY = '//td[4]';
const XPATH_TRACKS_WEDNESDAY = '//td[5]';
const XPATH_TRACKS_THURSDAY = '//td[6]';
const XPATH_TRACKS_FRIDAY = '//td[7]';
const XPATH_TRACKS_SATURDAY = '//td[8]';
const XPATH_TRACKS_SUNDAY = '//td[9]';

import { IScheduleService } from './IScheduleService.interface';

export class DvvsService extends BaseService implements IScheduleService {
  constructor(channelId: string, languageCode: string) {
    super(channelId, languageCode);
  }

  async getScheduleSite(daysOfWeek: string[] = []): Promise<ISchedules> {
    const { data: page } = await axios.get(URL);

    const { title, schedules } = this.parseSchedule(page, daysOfWeek);

    return { title, schedules };
  }

  private parseSchedule(page: string, daysOfWeek: string[]): any {
    const dom = new DOMParser().parseFromString(page.replace(new RegExp('<s*html[^>]*>', 'gi'), '<html>'));

    const title = (select1(XPATH_TITLE, dom) as Node).textContent!.trim();
    const subTitle = (select1(XPATH_DATES, dom) as Node).textContent!.trim();

    const timesStart = this.selectPart(XPATH_TIMES_START, dom, 3, 22);
    const sessions = this.selectPart(XPATH_SESSIONS, dom, 1, 20);
    const tracksByDays = [
      this.selectPart(XPATH_TRACKS_MONDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_TUESDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_WEDNESDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_THURSDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_FRIDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_SATURDAY, dom, 1, 20),
      this.selectPart(XPATH_TRACKS_SUNDAY, dom, 1, 20),
    ];

    return {
      title: `${title}\n${subTitle}\n`,
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

  private selectPart(xpath: string, dom: Document, firstElementNumber: number, lastElementNumber: number): string[] {
    return select(xpath, dom)
      .filter((_, index) => index >= firstElementNumber && index <= lastElementNumber)
      .map(selectedValue => (selectedValue as Node).textContent!.trim());
  }

  formatSchedule({ title, schedules }: ISchedules, newSchedulePhrase: string): string {
    let scheduleFormatted = `${newSchedulePhrase}\n${title}`;

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

  getDifference(oldSchedule: ISchedules, newSchedule: ISchedules, changesPhrase: string): string {
    if (newSchedule.title !== oldSchedule.title) {
      return '';
    }

    let result = changesPhrase;

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
