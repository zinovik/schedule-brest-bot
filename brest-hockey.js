const jsdom = require('jsdom');
const axios = require('axios');

const { JSDOM } = jsdom;

function getSchedule() {
  return axios.get('http://brest-hockey.by')
    .then((response) => {
      const dom = new JSDOM(response.data);
      const table = Array.from(dom.window.document.querySelector('table tbody').children);

      let schedule = ``;
      table.forEach((item, i) => {
        if (i) {
          const daySchedule = `${item.children[0].textContent}, ${item.children[1].textContent}: ${item.children[2].textContent}`;
          schedule = `${schedule}
${daySchedule.replace(/\t/g, '')}`;
        }
      });
      return schedule;
    });
}

module.exports = {
  getSchedule: getSchedule
};
