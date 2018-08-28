import { JSDOM } from 'jsdom';
import axios from 'axios';

const SCHEDULE_TABLE_SELECTOR = 'table tbody';

function getSchedule(): Promise<string> {
  return axios.get('http://brest-hockey.by')
    .then(({ data }) => {
      const dom = new JSDOM(data);
      const table = Array.from(dom.window.document.querySelector(SCHEDULE_TABLE_SELECTOR).children);

      let schedule = '';
      table.forEach((item: { children: Array<any> }, i) => {
        if (i) {
          const daySchedule = `${item.children[0].textContent}, ${item.children[1].textContent}: ${item.children[2].textContent}`;
          schedule = `${schedule}\n${daySchedule.replace(/\t/g, '')}`;
        }
      });
      return schedule;
    });
}

export default {
  getSchedule: getSchedule,
};
