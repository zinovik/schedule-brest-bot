import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-hockey.by';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';

export const getSchedule = async (): Promise<string> => {

  let page: string;

  try {
    page = await fetchSchedule(URL);
  } catch (e) {
    console.log('Error fetching brest-hockey site schedule');
    return '';
  }

  const dom = new JSDOM(page);
  const table: any[] = Array.from(
    dom.window.document.querySelector(SCHEDULE_TABLE_SELECTOR).children,
  );

  let schedule = '';

  table.forEach((item: { children: any[] }, i) => {
    if (!i) return;

    const daySchedule = `${item.children[0].textContent}, `
      + `${item.children[1].textContent}: `
      + `${item.children[2].textContent}`;
    schedule = `${schedule}\n${daySchedule.replace(/\t/g, '')}`;
  });

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
