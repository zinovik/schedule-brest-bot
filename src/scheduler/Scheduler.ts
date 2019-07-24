import { ScheduleType } from '../common/model/Schedule.type';

import { IScheduler } from './IScheduler.interface';
import { IConfigurationService } from '../configuration/IConfigurationService.interface';
import { IScheduleService } from '../schedules/IScheduleService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

export class Scheduler implements IScheduler {
  constructor(
    private readonly configurationService: IConfigurationService,
    private readonly databaseService: IDatabaseService,
    private readonly languageService: ILanguageService,
    private readonly telegramService: ITelegramService,
  ) {
    this.configurationService = configurationService;
    this.databaseService = databaseService;
    this.languageService = languageService;
    this.telegramService = telegramService;
  }

  async checkUpdateAndSendSchedules(
    scheduleServices: IScheduleService[],
    options: { isIgnoreSend: boolean; isForceSend: boolean } = {
      isIgnoreSend: false,
      isForceSend: false,
    },
  ): Promise<string[]> {
    return Promise.all(scheduleServices.map(scheduleService => this.checkUpdateAndSendSchedule(scheduleService, options)));
  }

  private async checkUpdateAndSendSchedule(
    scheduleService: IScheduleService,
    { isIgnoreSend, isForceSend }: { isIgnoreSend: boolean; isForceSend: boolean },
  ): Promise<string> {
    const channelId = scheduleService.getChannelId();
    const languageCode = scheduleService.getChannelLanguageCode();

    const configuration = this.configurationService.getConfiguration(channelId);
    scheduleService.setConfiguration(configuration);

    let scheduleDb: string;

    try {
      scheduleDb = await this.databaseService.getSchedule(channelId);
    } catch (error) {
      console.error('Error getting schedule from the database', error.message);
      return 'Error getting schedule from the database';
    }

    let scheduleSite: ScheduleType;

    try {
      scheduleSite = await scheduleService.getScheduleSite(this.languageService.getFullDaysOfWeek(languageCode));
    } catch (error) {
      console.error('Error getting schedule from the site', error.message);
      return 'Error getting schedule from the site';
    }

    const scheduleSiteJSON = JSON.stringify(scheduleSite);

    if (isForceSend || scheduleDb !== scheduleSiteJSON) {
      const scheduleFormatted = scheduleService.formatSchedule(scheduleSite, this.languageService.getNewSchedulePhrase(languageCode));

      try {
        await this.databaseService.setSchedule(channelId, scheduleSiteJSON);
      } catch (error) {
        console.error('Error saving schedule to the database', error.message);
        return 'Error saving schedule to the database';
      }

      if (isIgnoreSend) {
        return scheduleFormatted;
      }

      try {
        await this.telegramService.sendMessage({
          text: scheduleFormatted,
          replyMarkup: this.languageService.getDaysOfWeekStartButtons(languageCode),
          chatId: channelId,
        });
      } catch (error) {
        console.error('Error sending schedule message to telegram', error.message);
        return 'Error sending schedule message to telegram';
      }

      if (!scheduleDb) {
        return scheduleFormatted;
      }

      let difference: string;

      try {
        difference = scheduleService.getDifference(JSON.parse(scheduleDb), scheduleSite, this.languageService.getChangesPhrase(languageCode));
      } catch (error) {
        console.error('Error getting schedule difference', error.message);
        return 'Error getting schedule difference';
      }

      if (difference) {
        try {
          await this.telegramService.sendMessage({
            text: difference,
            replyMarkup: '',
            chatId: channelId,
          });
        } catch (error) {
          console.error('Error sending schedule difference message to telegram', error.message);
          return 'Error sending schedule difference message to telegram';
        }
      }

      return scheduleFormatted;
    }

    return 'Done. No new schedule from the site';
  }
}
