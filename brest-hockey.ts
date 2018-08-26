import { JSDOM } from 'jsdom';
import axios from 'axios';

function getSchedule() {
  return axios.get('http://brest-hockey.by')
    .then(({ data }) => {
      const dom = new JSDOM(data);
      const table = Array.from(dom.window.document.querySelector('table tbody').children);

      let schedule = ``;
      table.forEach((item: { children: Array<any> }, i) => {
        if (i) {
          const daySchedule = `${item.children[0].textContent}, ${item.children[1].textContent}: ${item.children[2].textContent}`;
          schedule = `${schedule}
${daySchedule.replace(/\t/g, '')}`;
        }
      });
      return schedule;
    });
}

export default {
  getSchedule: getSchedule
};
