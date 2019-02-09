import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-dvvs.by/sched';
const SCHEDULE_TABLE_SELECTOR = '#content';

export const getSchedule = async (): Promise<string> => {

  let page: string;

  try {
    page = await fetchSchedule(URL);
  } catch (e) {
    console.log('Error fetching brest-dvvs site schedule');
    return '';
  }

  let parsedSchedule: any;

  try {
    parsedSchedule = parseSchedule(page, SCHEDULE_TABLE_SELECTOR);
  } catch (e) {
    console.log('Error parsing brest-dvvs site schedule');
    return '';
  }

  let { schedule } = parsedSchedule;
  const { scheduleObject } = parsedSchedule;

  schedule += formatSchedule(scheduleObject);

  console.log(schedule);

  return schedule;
};

const fetchSchedule = (URL: string): Promise<string> => {
  return axios.get(URL)
    .then(({ data }: { data: string }) => {
      return data;
    })
    .catch(() => {
      throw new Error();
    });
};

const parseSchedule = (page: string, scheduleTableSelector: string): any => {
  const dom = new JSDOM(page);
  const table: any[] = Array.from(
    dom.window.document.querySelector(scheduleTableSelector).children,
  );

  let schedule: string;

  const header = table[5].textContent.trim();
  schedule = `${header}\n`;

  let subHeader: string;
  try {
    subHeader = table[6].children[2].children[0].children[0].children[0]
      .textContent.trim();
  } catch (error) {
    subHeader = table[7].children[0].children[0].children[0].textContent.trim();
  }
  schedule = `${schedule}${subHeader}\n`;

  let pool50mSchedule;
  try {
    pool50mSchedule = Array.from(table[6].children[2].children[0].children[0].children);
  } catch (error) {
    pool50mSchedule = Array.from(table[7].children[0].children[0].children);
  }

  const scheduleObject = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

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

    scheduleObject.monday.push({ start, session, tracks: monday });
    scheduleObject.tuesday.push({ start, session, tracks: tuesday });
    scheduleObject.wednesday.push({ start, session, tracks: wednesday });
    scheduleObject.thursday.push({ start, session, tracks: thursday });
    scheduleObject.friday.push({ start, session, tracks: friday });
    scheduleObject.saturday.push({ start, session, tracks: saturday });
    scheduleObject.sunday.push({ start, session, tracks: sunday });
  });

  return { schedule, scheduleObject };
};

const formatSchedule = (scheduleObject: any): string => {
  let schedule = '';

  Object.keys(scheduleObject).forEach((day: any) => {
    schedule = `${schedule}\n${day.toUpperCase()}\n`;
    scheduleObject[day].forEach((timeData: any) => {
      schedule = `${schedule}${timeData.start} | ${timeData.session} | ${timeData.tracks}\n`;
    });
  });

  return schedule;
};
