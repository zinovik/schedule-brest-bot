import axios from 'axios';
import { JSDOM } from 'jsdom';

const URL = 'http://brest-dvvs.by/sched';
const SCHEDULE_TABLE_SELECTOR = '#content';

export const getSchedule = (): Promise<string> => {
  return axios.get(URL)
    .then(({ data }: { data: string }) => {
      const dom = new JSDOM(data);
      const table: any[] = Array.from(dom.window.document.querySelector(SCHEDULE_TABLE_SELECTOR).children);

      let schedule = '';

      const pool50mTitle = table[5].children[0].textContent.trim();
      schedule = `${schedule}${pool50mTitle}`;

      const pool50mDates = table[6].children[0].children[0].children[0].textContent.trim();
      schedule = `${schedule}\n${pool50mDates}`;

      const pool50mSchedule = Array.from(table[6].children[0].children[0].children);

      pool50mSchedule.forEach((row: { children: any[] }) => {
        const rowChildren = Array.from(row.children);
        rowChildren.forEach((col: any) => {
          schedule = `${schedule} ${col.textContent.trim().replace(/_/g, '-')}`;
        });
        schedule = `${schedule}\n`;
      });


      const pool25mTitle = table[10].children[0].textContent.trim();
      schedule = `${schedule}\n${pool25mTitle}`;

      const pool25mDates = table[6].children[0].children[0].children[0].textContent.trim();
      schedule = `${schedule}\n${pool25mDates}`;

      const pool25mSchedule = Array.from(table[11].children[0].children[0].children[0].children);

      pool25mSchedule.forEach((row: { children: any[] }) => {
        const rowChildren = Array.from(row.children);
        rowChildren.forEach((col: any) => {
          schedule = `${schedule} ${col.textContent.trim().replace(/_/g, '-')}`;
        });
        schedule = `${schedule}\n`;
      });

      return schedule;
    })
    .catch((): string => '');
};
