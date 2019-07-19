import { IMock, Mock, It, Times } from 'typemoq';

import { Scheduler } from '../../src/scheduler/Scheduler';
import { IConfigurationService } from '../../src/configuration/IConfigurationService.interface';
import { IDatabaseService } from '../../src/database/IDatabaseService.interface';
import { ILanguageService } from '../../src/language/ILanguageService.interface';
import { ITelegramService } from '../../src/telegram/ITelegramService.interface';
import { IScheduleService } from '../../src/schedules/IScheduleService.interface';
import { ConfigurationType } from '../../src/schedules/model/Configuration.type';
import { ScheduleType } from '../../src/common/model/Schedule.type';

describe('Scheduler', () => {
  let configurationServiceMock: IMock<IConfigurationService>;
  let databaseServiceMock: IMock<IDatabaseService>;
  let languageServiceMock: IMock<ILanguageService>;
  let telegramServiceMock: IMock<ITelegramService>;
  let scheduleServiceMock: IMock<IScheduleService>;

  let scheduler: Scheduler;

  beforeEach(() => {
    configurationServiceMock = Mock.ofType<IConfigurationService>();
    databaseServiceMock = Mock.ofType<IDatabaseService>();
    languageServiceMock = Mock.ofType<ILanguageService>();
    telegramServiceMock = Mock.ofType<ITelegramService>();
    scheduleServiceMock = Mock.ofType<IScheduleService>();

    scheduler = new Scheduler(
      configurationServiceMock.object,
      databaseServiceMock.object,
      languageServiceMock.object,
      telegramServiceMock.object,
    );
  });

  afterEach(() => {
    configurationServiceMock.verifyAll();
    databaseServiceMock.verifyAll();
    languageServiceMock.verifyAll();
    telegramServiceMock.verifyAll();
    scheduleServiceMock.verifyAll();
  });

  it('Should check and update schedules, send message', async () => {
    // Arrange
    const channelId = 'test-channel-id';
    const languageCode = 'language-code';
    const configuration = {} as ConfigurationType;
    const scheduleDb = '{"title":"test","schedules":[]}';
    const daysOfWeek: string[] = [];
    const scheduleSite = { title: 'test2', schedules: [] } as ScheduleType;
    const newSchedulePhrase = 'new-schedule';
    const formatedSchedule = 'formated-schedule';
    const daysOfWeekStartButtons = 'days-of-week-start-buttons';
    const changesPhrase = 'changes-phrase';
    const difference = 'difference';
    scheduleServiceMockGetChannelId(channelId);
    scheduleServiceMockGetChannelLanguageCode(languageCode);
    configurationServiceMockgGetConfiguration(channelId, configuration);
    scheduleServiceMockSetConfiguration(configuration);
    databaseServiceMockGetSchedule(channelId, scheduleDb);
    languageServiceMockGetFullDaysOfWeek(languageCode, daysOfWeek);
    scheduleServiceMockGetScheduleSite(scheduleSite, daysOfWeek);
    languageServiceMockGetNewSchedulePhrase(languageCode, newSchedulePhrase);
    scheduleServiceMockFormatSchedule(scheduleSite, newSchedulePhrase, formatedSchedule);
    databaseServiceMockSetSchedule(channelId, JSON.stringify(scheduleSite));
    languageServiceMockGetDaysOfWeekStartButtons(languageCode, daysOfWeekStartButtons);
    telegramServiceMockSetSchedule(formatedSchedule, daysOfWeekStartButtons, channelId);
    languageServiceMockGetChangesPhrase(languageCode, changesPhrase);
    scheduleServiceMockGetDifference(JSON.parse(scheduleDb), scheduleSite, changesPhrase, difference);
    telegramServiceMockSetSchedule(difference, '', channelId);

    // Act
    await scheduler.checkUpdateAndSendSchedules([scheduleServiceMock.object]);

    // Assert
    expect(true).toBeTruthy();
  });

  function scheduleServiceMockGetChannelId(channelId: string) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.getChannelId())
      .returns(() => channelId)
      .verifiable(Times.once());
  }

  function scheduleServiceMockGetChannelLanguageCode(languageCode: string) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.getChannelLanguageCode())
      .returns(() => languageCode)
      .verifiable(Times.once());
  }

  function configurationServiceMockgGetConfiguration(channelId: string, configuration: ConfigurationType) {
    configurationServiceMock
      .setup((x: IConfigurationService) => x.getConfiguration(channelId))
      .returns(() => configuration)
      .verifiable(Times.once());
  }

  function scheduleServiceMockSetConfiguration(configuration: ConfigurationType) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.setConfiguration(configuration))
      .returns(() => undefined)
      .verifiable(Times.once());
  }

  function databaseServiceMockGetSchedule(name: string, schedule: string) {
    databaseServiceMock
      .setup((x: IDatabaseService) => x.getSchedule(name))
      .returns(async () => schedule)
      .verifiable(Times.once());
  }

  function languageServiceMockGetFullDaysOfWeek(languageCode: string, daysOfWeek: string[]) {
    languageServiceMock
      .setup((x: ILanguageService) => x.getFullDaysOfWeek(languageCode))
      .returns(() => daysOfWeek)
      .verifiable(Times.once());
  }

  function scheduleServiceMockGetScheduleSite(scheduleSite: ScheduleType, daysOfWeek?: string[]) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.getScheduleSite(daysOfWeek))
      .returns(async () => scheduleSite)
      .verifiable(Times.once());
  }

  function languageServiceMockGetNewSchedulePhrase(languageCode: string, newSchedulePhrase: string) {
    languageServiceMock
      .setup((x: ILanguageService) => x.getNewSchedulePhrase(languageCode))
      .returns(() => newSchedulePhrase)
      .verifiable(Times.once());
  }

  function scheduleServiceMockFormatSchedule(
    scheduleSite: ScheduleType,
    newSchedulePhrase: string,
    formatedSchedule: string,
  ) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.formatSchedule(scheduleSite, newSchedulePhrase))
      .returns(() => formatedSchedule)
      .verifiable(Times.once());
  }

  function databaseServiceMockSetSchedule(channelId: string, schedule: string) {
    databaseServiceMock
      .setup((x: IDatabaseService) => x.setSchedule(channelId, schedule))
      .returns(async () => 'OK')
      .verifiable(Times.once());
  }

  function languageServiceMockGetDaysOfWeekStartButtons(languageCode: string, daysOfWeekStartButtons: string) {
    languageServiceMock
      .setup((x: ILanguageService) => x.getDaysOfWeekStartButtons(languageCode))
      .returns(() => daysOfWeekStartButtons)
      .verifiable(Times.once());
  }

  function telegramServiceMockSetSchedule(text: string, replyMarkup: string, chatId: string | number) {
    telegramServiceMock
      .setup((x: ITelegramService) => x.sendMessage({ text, replyMarkup, chatId }))
      .returns(async () => undefined)
      .verifiable(Times.once());
  }

  function languageServiceMockGetChangesPhrase(languageCode: string, changesPhrase: string) {
    languageServiceMock
      .setup((x: ILanguageService) => x.getChangesPhrase(languageCode))
      .returns(() => changesPhrase)
      .verifiable(Times.once());
  }

  function scheduleServiceMockGetDifference(
    oldSchedule: ScheduleType,
    newSchedule: ScheduleType,
    changesPhrase: string,
    difference: string,
  ) {
    scheduleServiceMock
      .setup((x: IScheduleService) => x.getDifference(oldSchedule, newSchedule, changesPhrase))
      .returns(() => difference)
      .verifiable(Times.once());
  }
});
