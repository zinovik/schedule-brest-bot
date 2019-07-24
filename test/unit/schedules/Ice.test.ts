import * as nock from 'nock';

import { IceService } from '../../../src/schedules/Ice.service';
import { HardcodeConfigurationService } from '../../../src/configuration/HardcodeConfiguration.service';
import { IIceConfiguration } from '../../../src/schedules/model/IIceConfiguration.interface';
import { getPageMock, getSchedule } from './mocks/Ice.mock';

describe('IceService', () => {
  let iceService: IceService;
  let configuration: IIceConfiguration;

  const channelId = 'test-channel-id';
  const languageCode = 'language-code';

  beforeEach(() => {
    nock.cleanAll();
    iceService = new IceService(channelId, languageCode);
    const configurationService = new HardcodeConfigurationService([channelId, 'fake-id1', 'fake-id2']);
    configuration = configurationService.getConfiguration(channelId) as IIceConfiguration;
    iceService.setConfiguration(configuration);
  });

  it('Should return schedule site', async () => {
    // Arrange
    const url = configuration.url;
    nock(url)
      .get('/')
      .reply(200, getPageMock());

    // Act
    const scheduleSite = await iceService.getScheduleSite();

    // Assert
    expect(scheduleSite).toStrictEqual(getSchedule());
  });
});
