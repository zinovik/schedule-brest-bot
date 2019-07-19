import { ScheduleType } from '../common/model/Schedule.type';

import { ISchedulerService } from './ISchedulerService.interface';
import { IConfigurationService } from '../configuration/IConfigurationService.interface';
import { IScheduleService } from '../schedules/IScheduleService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

export class SchedulerService implements ISchedulerService {
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
    { isIgnoreSend, isForceSend }: { isIgnoreSend: boolean; isForceSend: boolean } = {
      isIgnoreSend: false,
      isForceSend: false,
    },
  ): Promise<string[]> {
    return Promise.all(
      scheduleServices.map(scheduleService =>
        this.checkUpdateAndSendSchedule(scheduleService, { isIgnoreSend, isForceSend }),
      ),
    );
  }

  private async checkUpdateAndSendSchedule(
    scheduleService: IScheduleService,
    { isIgnoreSend, isForceSend }: { isIgnoreSend: boolean; isForceSend: boolean },
  ): Promise<string> {
    const languageCode = scheduleService.getChannelLanguageCode();
    const channelId = scheduleService.getChannelId();

    const configuration = this.configurationService.getConfiguration(channelId);
    scheduleService.setConfiguration(configuration);

    const scheduleDb = await this.databaseService.getDb(channelId);

    let scheduleSite: ScheduleType;

    try {
      scheduleSite = await scheduleService.getScheduleSite(this.languageService.getFullDaysOfWeek(languageCode));
    } catch (error) {
      return 'Error. No schedule from the site';
    }

    const scheduleSiteJSON = JSON.stringify(scheduleSite);

    if (isForceSend || scheduleDb !== scheduleSiteJSON) {
      const scheduleFormatted = scheduleService.formatSchedule(
        scheduleSite,
        this.languageService.getNewSchedulePhrase(languageCode),
      );

      await this.databaseService.setDb(channelId, scheduleSiteJSON);

      if (isIgnoreSend) {
        return scheduleFormatted;
      }

      await this.telegramService.sendMessage({
        text: scheduleFormatted,
        replyMarkup: this.languageService.getDaysOfWeekStartButtons(languageCode),
        chatId: channelId,
      });

      if (!scheduleDb) {
        return scheduleFormatted;
      }

      const difference = scheduleService.getDifference(
        JSON.parse(scheduleDb),
        scheduleSite,
        this.languageService.getChangesPhrase(languageCode),
      );

      if (difference) {
        await this.telegramService.sendMessage({
          text: difference,
          replyMarkup: '',
          chatId: channelId,
        });
      }

      return scheduleFormatted;
    }

    return 'Done. No new schedule from the site';
  }
}
