import * as iconv from 'iconv-lite';
import * as https from 'https';
import { DOMParser } from 'xmldom';
import { select } from 'xpath';

import { ConfigurationError } from './error/ConfigParameterNotDefinedError';
import { BaseService } from './Base.service';
import { ITransportSchedule } from '../common/model/ITransportSchedule.interface';
import { IAvConfiguration } from './model/IAvConfiguration.interface';
import { IScheduleService } from './IScheduleService.interface';

export class AvService extends BaseService implements IScheduleService {
  private configuration: IAvConfiguration | undefined;

  constructor(channelId: string, languageCode: string) {
    super(channelId, languageCode);
  }

  setConfiguration(configuration: IAvConfiguration): void {
    this.configuration = configuration;
  }

  async getScheduleSite(): Promise<ITransportSchedule> {
    return new Promise((resolve, reject) => {
      if (!this.configuration) {
        throw new ConfigurationError();
      }

      https.get(this.configuration.url, response => {
        const chunks: Uint8Array[] = [];

        response.on('error', error => {
          reject(error);
        });

        response.on('data', chunk => {
          chunks.push(chunk);
        });

        response.on('end', () => {
          const page = iconv.decode(Buffer.concat(chunks), 'win1251');

          resolve(this.parseSchedule(page));
        });
      });
    });
  }

  private parseSchedule(page: string): ITransportSchedule {
    if (!this.configuration) {
      throw new ConfigurationError();
    }

    const dom = new DOMParser({
      errorHandler: {
        warning: () => null,
        error: () => null,
        fatalError: () => null,
      },
    }).parseFromString(page.replace(new RegExp('<s*html[^>]*>', 'gi'), '<html>'));

    const routes = this.selectPart(this.configuration.xPathRoutes, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const platforms = this.selectPart(this.configuration.xPathPlatforms, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const regularities = this.selectPart(this.configuration.xPathRegularities, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const departmentsAS = this.selectPart(this.configuration.xPathDepartmentAS, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const departmentsTU = this.selectPart(this.configuration.xPathDepartmentTU, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const arrivals = this.selectPart(this.configuration.xPathArrival, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const departmentsBack = this.selectPart(this.configuration.xPathDepartmentBack, dom, this.configuration.firstRoute, this.configuration.lastRoute);
    const arrivalsBack = this.selectPart(this.configuration.xPathArrivalBack, dom, this.configuration.firstRoute, this.configuration.lastRoute);

    return {
      title: '',
      schedules: Array.from({ length: routes.length }, (_: never, index) => {
        return {
          route: routes[index],
          platform: platforms[index],
          regularity: regularities[index],
          departmentAS: departmentsAS[index],
          departmentTU: departmentsTU[index],
          arrival: arrivals[index],
          departmentBack: departmentsBack[index],
          arrivalBack: arrivalsBack[index],
        };
      }),
    };
  }

  private selectPart(xPath: string, dom: Document, firstElementNumber: number, lastElementNumber: number): string[] {
    return select(xPath, dom)
      .filter((_, index) => index >= firstElementNumber && index <= lastElementNumber)
      .map(selectedValue => (selectedValue as Node).textContent!.trim());
  }

  formatSchedule({ title, schedules }: ITransportSchedule, newSchedulePhrase: string): string {
    let scheduleFormatted = `${newSchedulePhrase}${title}`;

    schedules.forEach(schedule => {
      const routeSchedule = `${schedule.route} (${schedule.regularity}, ${schedule.platform}): ${schedule.departmentAS}`;

      scheduleFormatted = `${scheduleFormatted}\n${routeSchedule}`;
    });

    return scheduleFormatted;
  }

  getDifference(oldSchedule: ITransportSchedule, newSchedule: ITransportSchedule, changesPhrase: string): string {
    let result = `${changesPhrase}\n`;

    for (let i = 0; i < newSchedule.schedules.length; i += 1) {
      const oldRoute = JSON.stringify(oldSchedule.schedules[i]);
      const newRoute = JSON.stringify(newSchedule.schedules[i]);

      if (oldRoute !== newRoute) {
        result = `${result}\n${newSchedule.schedules[i].route}: ${oldSchedule.schedules[i].departmentAS} → ${newSchedule.schedules[i].departmentAS}`;
      }
    }

    return result;
  }
}
