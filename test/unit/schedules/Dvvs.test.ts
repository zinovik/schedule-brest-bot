import * as nock from 'nock';

import { DvvsService } from '../../../src/schedules/Dvvs.service';
import { HardcodeConfigurationService } from '../../../src/configuration/HardcodeConfiguration.service';
import { IDvvsConfiguration } from '../../../src/schedules/model/IDvvsConfiguration.interface';
import { getPageMock, getSchedule, getDaysOfWeek } from './mocks/Dvvs.mock';

describe('DvvsService', () => {
  let dvvsService: DvvsService;
  let configuration: IDvvsConfiguration;

  const channelId = 'test-channel-id';
  const languageCode = 'language-code';

  beforeEach(() => {
    nock.cleanAll();
    dvvsService = new DvvsService(channelId, languageCode);
    const configurationService = new HardcodeConfigurationService(['fake-id', channelId]);
    configuration = configurationService.getConfiguration(channelId) as IDvvsConfiguration;
    dvvsService.setConfiguration(configuration);
  });

  it('Should return schedule site', async () => {
    // Arrange
    const url = configuration.url;
    nock(url)
      .get('/')
      .reply(200, getPageMock());

    // Act
    const scheduleSite = await dvvsService.getScheduleSite(getDaysOfWeek());

    // Assert
    expect(scheduleSite).toStrictEqual(getSchedule());
  });
});
