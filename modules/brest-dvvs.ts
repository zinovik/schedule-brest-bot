import axios from 'axios';
import { JSDOM } from 'jsdom';
import { stringify } from 'querystring';

const URL = 'http://brest-dvvs.by/sched';
const SCHEDULE_TABLE_SELECTOR = '#content';

export const getSchedule = (): Promise<string> => {
  return axios.get(URL)
    .then(({ data }: { data: string }) => {
      const dom = new JSDOM(data);
      const table: any[] = Array.from(
        dom.window.document.querySelector(SCHEDULE_TABLE_SELECTOR).children,
      );

      let schedule: string;

      try {
        const pool50mTitle = table[5].textContent.trim();
        schedule = `${pool50mTitle}\n`;

        const pool50mSubTitle = table[6].children[2].children[0].children[0].children[0]
          .textContent.trim();
        schedule = `${schedule}${pool50mSubTitle}\n`;

        const pool50mSchedule = Array.from(table[6].children[2].children[0].children[0].children);

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

          const start = rowChildren[0].textContent.trim().replace(/_/g, '-');
          const session = rowChildren[1].textContent.trim().replace(/_/g, '-');
          const monday = rowChildren[2].textContent.trim().replace(/_/g, '-');
          const tuesday = rowChildren[3].textContent.trim().replace(/_/g, '-');
          const wednesday = rowChildren[4].textContent.trim().replace(/_/g, '-');
          const thursday = rowChildren[5].textContent.trim().replace(/_/g, '-');
          const friday = rowChildren[6].textContent.trim().replace(/_/g, '-');
          const saturday = rowChildren[7].textContent.trim().replace(/_/g, '-');
          const sunday = rowChildren[8].textContent.trim().replace(/_/g, '-');

          scheduleObject.monday.push({ start, session, tracks: monday });
          scheduleObject.tuesday.push({ start, session, tracks: tuesday });
          scheduleObject.wednesday.push({ start, session, tracks: wednesday });
          scheduleObject.thursday.push({ start, session, tracks: thursday });
          scheduleObject.friday.push({ start, session, tracks: friday });
          scheduleObject.saturday.push({ start, session, tracks: saturday });
          scheduleObject.sunday.push({ start, session, tracks: sunday });
        });

        Object.keys(scheduleObject).forEach((day: any) => {
          schedule = `${schedule}\n${day.toUpperCase()}\n`;
          scheduleObject[day].forEach((timeData: any) => {
            schedule = `${schedule}${timeData.start} | ${timeData.session} | ${timeData.tracks}\n`;
          });
        });

        return schedule;

      } catch (e) {
        console.log('Error parsing dvvs site schedule');
        return '';
      }

    })
    .catch((): string => '');
};
