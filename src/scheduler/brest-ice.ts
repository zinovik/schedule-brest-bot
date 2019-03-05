import axios from 'axios';
import { JSDOM } from 'jsdom';

import { ISchedules } from './schedules.interface';

const URL = 'http://brest-hockey.by';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';

export const getSchedule = async (): Promise<ISchedules> => {
  const { data } = await axios.get(URL);

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
  let scheduleFormatted = title;

  schedules.forEach((schedule) => {
    const daySchedule = `${schedule.day}, ` + `${schedule.dayOfWeek}: ` + `${schedule.times}`;

    scheduleFormatted = `${scheduleFormatted}\n${daySchedule}`;
  });

  return scheduleFormatted;
};

export const getDifference = (oldSchedule: ISchedules, newSchedule: ISchedules): string => {
  if (newSchedule.schedules[0].day !== oldSchedule.schedules[0].day) {
    return '';
  }

  let result = 'Изменения:';

  for (let i = 0; i < newSchedule.schedules.length; i++) {
    if (newSchedule.schedules[i].times !== oldSchedule.schedules[i].times) {
      result = `${result}/n${newSchedule.schedules[i].day}: ${newSchedule.schedules[i].times}`;
    }
  }

  return result;
};
