import * as http from 'http';
import { JSDOM } from 'jsdom';

import { ISchedules } from './schedules.interface';
import {
  NEW_SCHEDULE,
  CHANGES,
} from '../phrases/phrases-rus';

const URL = 'http://brest-hockey.by/';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';

const makeApiRequest = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    http.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(data);
      });

    }).on('error', (error) => {
      reject(error);
    });
  });
};

export const getSchedule = async (): Promise<ISchedules> => {
  const data = await makeApiRequest(URL);

  const { title, schedules } = parseSchedule(data, SCHEDULE_TABLE_SELECTOR);

  return { title, schedules };
};

const parseSchedule = (
  page: string,
  scheduleTableSelector: string,
): ISchedules => {
  const dom = new JSDOM(page);

  const table: any[] = Array.from(dom.window.document.querySelector(scheduleTableSelector)!.children);

  const result: ISchedules = {
    title: '',
    schedules: [],
  };

  table.forEach((item: { children: any[] }, i) => {
    if (!i) return;

    result.schedules.push({
      day: item.children[0].textContent.trim(),
      dayOfWeek: item.children[1].textContent.trim(),
      times: item.children[2].textContent.trim(),
    });
  });

  return result;
};

export const formatSchedule = ({ title, schedules }: ISchedules): string => {
  let scheduleFormatted = `${NEW_SCHEDULE}${title}`;

  schedules.forEach((schedule) => {
    const daySchedule = `${schedule.day}, ` + `${schedule.dayOfWeek}: ` + `${schedule.times}`;

    scheduleFormatted = `${scheduleFormatted}\n${daySchedule}`;
  });

  return scheduleFormatted;
};

export const getDifference = (oldSchedule: ISchedules, newSchedule: ISchedules): string => {
  if (!oldSchedule || !newSchedule) {
    return '';
  }

  if (newSchedule.schedules[0].day !== oldSchedule.schedules[0].day) {
    return '';
  }

  let result = CHANGES;

  for (let i = 0; i < newSchedule.schedules.length; i += 1) {
    const newS = newSchedule.schedules[i];
    const oldS = oldSchedule.schedules[i];

    if (newS.times !== oldS.times) {
      result = `${result}\n${newS.day}: ${oldS.times} → ${newS.times}`;
    }
  }

  return result;
};
