import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-hockey.by';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';

export const getSchedule = async (): Promise<{ title: string, schedules: any[] }> => {

  let data: string;

  try {
    ({ data } = await axios.get(URL));
  } catch (error) {
    console.log('Error fetching ice site schedule');
    return undefined;
  }

  const { title, schedules } = parseSchedule(data, SCHEDULE_TABLE_SELECTOR);

  console.log(schedules);

  return { title, schedules };
};

const parseSchedule = (page: string, scheduleTableSelector: string): {
  title: string,
  schedules: any[],
} => {
  const dom = new JSDOM(page);

  const table: any[] = Array.from(
    dom.window.document.querySelector(scheduleTableSelector).children,
  );

  const title = '';
  const schedules = [];

  table.forEach((item: { children: any[] }, i) => {
    if (!i) return;

    schedules.push({
      day: item.children[0].textContent.replace(/\t/g, ''),
      dayOfWeek: item.children[1].textContent.replace(/\t/g, ''),
      times: item.children[2].textContent.replace(/\t/g, ''),
    });
  });

  return { title, schedules };
};

export const formatSchedule = ({ title, schedules }: {
  title: string,
  schedules: any[],
}): string => {
  let scheduleFormatted = title;

  schedules.forEach((schedule) => {
    const daySchedule = `${schedule.day}, `
      + `${schedule.dayOfWeek}: `
      + `${schedule.times}`;

    scheduleFormatted = `${scheduleFormatted}\n${daySchedule.replace(/\t/g, '')}`;
  });

  return scheduleFormatted;
};
