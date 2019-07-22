import { IConfigurationService } from './IConfigurationService.interface';
import { ConfigurationType } from '../schedules/model/Configuration.type';

export class HardcodeConfigurationService implements IConfigurationService {
  private readonly configurations = [
    {
      url: 'http://brest-hockey.by/',
      days: 10,

      xPathTitle: '//h5//strong',
      xPathSubTitle: '//h5//footer',
      xPathAdditionalInfo: '',
      xPathDates: '//td[1]',
      xPathDaysOfWeek: '//td[2]',
      xPathTimesLines: '//td[3]',
    },
    {
      url: 'http://brest-dvvs.by/sched/',
      firstTime: 1,
      lastTime: 20,
      timeShift: 2,

      xPathTitle: '//font//b',
      xPathSubTitle: '//font[contains(@size, "5")]',
      xPathAdditionalInfo: '',
      xPathTimesStart: '//td[1]',
      xPathSessions: '//td[2]',
      xPathTracks: Array.from({ length: 7 }, (_: never, index) => `//td[${index + 3}]`),
    },
    {
      url: 'https://av.brest.by/prigorod.htm',
      firstRoute: 1,
      lastRoute: 999,

      xPathRoutes: '//table//table//td[1]',
      xPathPlatforms: '//td[2]',
      xPathRegularities: '//td[3]',
      xPathDepartmentAS: '//td[4]',
      xPathDepartmentTU: '//td[5]',
      xPathArrival: '//td[6]',
      xPathDepartmentBack: '//td[7]',
      xPathArrivalBack: '//td[8]',
    },
  ];

  constructor(private readonly channelIds: string[]) {
    this.channelIds = channelIds;
  }

  getConfiguration(channelId: string): ConfigurationType {
    const configurationNumber = this.channelIds.indexOf(channelId);

    return this.configurations[configurationNumber];
  }
}
