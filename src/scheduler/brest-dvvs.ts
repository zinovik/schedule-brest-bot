import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-dvvs.by/sched';
const SCHEDULE_TABLE_SELECTOR = '#content';

export const getSchedule = async (): Promise<{ title: string, schedules: any[] }> => {

  let data: string;

  try {
    ({ data } = await axios.get(URL));
  } catch (error) {
    console.log('Error fetching dvvs site schedule');
    return undefined;
  }

  let parsedSchedule: any;

  try {
    parsedSchedule = parseSchedule(data, SCHEDULE_TABLE_SELECTOR);
  } catch (error) {
    console.log('Error parsing dvvs site schedule');
    return undefined;
  }

  const { title, schedules } = parsedSchedule;

  console.log(schedules);

  return { title, schedules };
};

const parseSchedule = (page: string, scheduleTableSelector: string): any => {
  const dom = new JSDOM(page);

  const table: any[] = Array.from(
    dom.window.document.querySelector(scheduleTableSelector).children,
  );

  let title = `${table[5].textContent.trim()}\n`;

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
  title = `${title}${subTitle}\n`;

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

  const schedules = [
    {
      dayOfWeek: 'Понедельник',
      times: [],
    },
    {
      dayOfWeek: 'Вторник',
      times: [],
    },
    {
      dayOfWeek: 'Среда',
      times: [],
    },
    {
      dayOfWeek: 'Четверг',
      times: [],
    },
    {
      dayOfWeek: 'Пятница',
      times: [],
    },
    {
      dayOfWeek: 'Суббота',
      times: [],
    },
    {
      dayOfWeek: 'Воскресенье',
      times: [],
    },
  ];

  pool50mSchedule.forEach((row: { children: any[] }, i: number) => {
    if (i < 2) return;

    const rowChildren = Array.from(row.children);

    const start = rowChildren[0].textContent.trim();
    const session = rowChildren[1].textContent.trim();
    const monday = rowChildren[2].textContent.trim();
    const tuesday = rowChildren[3].textContent.trim();
    const wednesday = rowChildren[4].textContent.trim();
    const thursday = rowChildren[5].textContent.trim();
    const friday = rowChildren[6].textContent.trim();
    const saturday = rowChildren[7].textContent.trim();
    const sunday = rowChildren[8].textContent.trim();

    schedules[0].times.push({ start, session, tracks: monday });
    schedules[1].times.push({ start, session, tracks: tuesday });
    schedules[2].times.push({ start, session, tracks: wednesday });
    schedules[3].times.push({ start, session, tracks: thursday });
    schedules[4].times.push({ start, session, tracks: friday });
    schedules[5].times.push({ start, session, tracks: saturday });
    schedules[6].times.push({ start, session, tracks: sunday });
  });

  return { title, schedules };
};

export const formatSchedule = ({ title, schedules }: {
  title: string,
  schedules: any[],
}): string => {
  let scheduleFormatted = title;

  schedules.forEach((schedule) => {
    scheduleFormatted = `${scheduleFormatted}\n${schedule.dayOfWeek}\n`;
    schedule.times.forEach((time: any) => {
      scheduleFormatted = `${scheduleFormatted}${time.start} | ${time.session} | ${time.tracks}\n`;
    });
  });

  return scheduleFormatted;
};
