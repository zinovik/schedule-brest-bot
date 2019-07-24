import * as nock from 'nock';

import { AvService } from '../../../src/schedules/Av.service';
import { HardcodeConfigurationService } from '../../../src/configuration/HardcodeConfiguration.service';
import { IAvConfiguration } from '../../../src/schedules/model/IAvConfiguration.interface';
import { getPageMock, getSchedule } from './mocks/Av.mock';

describe('AvService', () => {
  let avService: AvService;
  let configuration: IAvConfiguration;

  const channelId = 'test-channel-id';
  const languageCode = 'language-code';

  beforeEach(() => {
    nock.cleanAll();
    avService = new AvService(channelId, languageCode);
    const configurationService = new HardcodeConfigurationService(['fake-id1', 'fake-id2', channelId]);
    configuration = configurationService.getConfiguration(channelId) as IAvConfiguration;
    avService.setConfiguration(configuration);
  });

  it('Should return schedule site', async () => {
    // Arrange
    const url = configuration.url;

    nock(`${url.split('/')[0]}//${url.split('/')[2]}`)
      .get(`/${url.split('/')[3]}`)
      .reply(200, getPageMock());

    // Act
    const scheduleSite = await avService.getScheduleSite();

    // Assert
    expect(scheduleSite).toStrictEqual(getSchedule());
  });
});
