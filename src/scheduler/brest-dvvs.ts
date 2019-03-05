import axios from 'axios';
import { JSDOM } from 'jsdom';

import { ISchedules, ISchedule, Time } from './schedules.interface';

const URL = 'http://brest-dvvs.by/sched';
const SCHEDULE_TABLE_SELECTOR = '#content';

export const getSchedule = async (): Promise<ISchedules> => {
  const { data } = await axios.get(URL);

  const { title, schedules } = parseSchedule(data, SCHEDULE_TABLE_SELECTOR);

  return { title, schedules };
};

const parseSchedule = (page: string, scheduleTableSelector: string): any => {
  const dom = new JSDOM(page);

  const table: any[] = Array.from(dom.window.document.querySelector(scheduleTableSelector)!.children);

  const result: ISchedules = {
    title: '',
    schedules: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ].map((day: string): ISchedule => ({
      dayOfWeek: day,
      times: [],
    })),
  };

  result.title = `${table[5].textContent.trim()}\n`;

  let subTitle: string;
  try {
    subTitle = table[6].children[2].children[0].children[0].children[0].textContent.trim();
  } catch (error) {
    try {
      subTitle = table[7].children[0].children[0].children[0].textContent.trim();
    } catch (error) {
      subTitle = table[8].children[0].children[0].children[0].textContent.trim();
    }
  }
  result.title = `${result.title}${subTitle}\n`;

  // const dates = subTitle.split(' с ')[1].split(' по ');

  let pool50mSchedule;
  try {
    pool50mSchedule = Array.from(table[6].children[2].children[0].children[0].children);
  } catch (error) {
    try {
      pool50mSchedule = Array.from(table[7].children[0].children[0].children);
    } catch (error) {
      pool50mSchedule = Array.from(table[8].children[0].children[0].children);
    }
  }

  pool50mSchedule.forEach(({ children }: any, index: number) => {
    if (index < 2) return;

    const rowChildren = Array.from(children) as { textContent: string }[];

    const start = rowChildren[0].textContent.trim();
    const session = rowChildren[1].textContent.trim();

    for (let i = 0; i < 7; i += 1) {
      result.schedules[i].times.push({
        start,
        session,
        tracks: rowChildren[i + 2].textContent.trim(),
      });
    }
  });

  return result;
};

export const formatSchedule = ({ title, schedules }: ISchedules): string => {
  let scheduleFormatted = title;

  schedules.forEach((schedule) => {
    scheduleFormatted = `${scheduleFormatted}\n${schedule.dayOfWeek}\n`;

    schedule.times.forEach(({ tracks, start, session }: Time) => {
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
};

export const getDifference = (oldSchedule: ISchedules, newSchedule: ISchedules): string => {
  if (newSchedule.title !== oldSchedule.title) {
    return '';
  }

  let result = '';

  for (let i = 0; i < newSchedule.schedules.length; i += 1) {
    if (JSON.stringify(newSchedule.schedules[i].times) !== JSON.stringify(oldSchedule.schedules[i].times)) {
      result = `${result}${newSchedule.schedules[i].dayOfWeek}: ${newSchedule.schedules[i].times}/n`;
    }
  }

  // return result;
  return '';
};
