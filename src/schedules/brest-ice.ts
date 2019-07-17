import axios from 'axios';
import { JSDOM } from 'jsdom';

import { getDb, setDb } from '../database/Redis.service';
import { ISchedules } from './ISchedules.interface';
import {
  NEW_SCHEDULE,
  CHANGES,
} from '../language/Language.service';

const URL = 'http://brest-hockey.by/';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';
const DB_NAME = 'scheduleIce';

export const getScheduleSite = (): Promise<ISchedules> => {
  return axios.get(URL)
    .then(({ data }) => {
      const { title, schedules } = parseSchedule(data, SCHEDULE_TABLE_SELECTOR);

      return { title, schedules };
    });
};

export const getScheduleDb = (): Promise<string> => getDb(DB_NAME);

export const setScheduleDb = (schedule: string): Promise<string> => setDb(DB_NAME, schedule);

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
