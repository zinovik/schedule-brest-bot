import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-hockey.by';
const SCHEDULE_TABLE_SELECTOR = 'table tbody';

export const getSchedule = (): Promise<string> => {
  return axios.get(URL)
    .then(({ data }: { data: string }) => {
      const dom = new JSDOM(data);
      const table: any[] = Array.from(dom.window.document.querySelector(SCHEDULE_TABLE_SELECTOR).children);

      let schedule = '';
      table.forEach((item: { children: any[] }, i) => {
        if (i) {
          const daySchedule = `${item.children[0].textContent}, ${item.children[1].textContent}: ${item.children[2].textContent}`;
          schedule = `${schedule}\n${daySchedule.replace(/\t/g, '')}`;
        }
      });
      return schedule;
    })
    .catch((): string => '');
};
