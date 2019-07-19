import { ConfigurationType } from '../schedules/model/Configuration.type';

export interface IConfigurationService {
  getConfiguration(channelId: string): ConfigurationType;
}
