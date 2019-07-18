import { ISchedules } from '../common/model/ISchedules.interface';

import { ISchedulerService } from './ISchedulerService.interface';
import { IScheduleService } from '../schedules/IScheduleService.interface';
import { ILanguageService } from '../language/ILanguageService.interface';
import { IDatabaseService } from '../database/IDatabaseService.interface';
import { ITelegramService } from '../telegram/ITelegramService.interface';

export class SchedulerService implements ISchedulerService {
  constructor(
    private readonly databaseService: IDatabaseService,
    private readonly languageService: ILanguageService,
    private readonly telegramService: ITelegramService,
  ) {
    this.databaseService = databaseService;
    this.languageService = languageService;
    this.telegramService = telegramService;
  }

  async checkAndUpdateSchedules(scheduleServices: IScheduleService[]): Promise<string[]> {
    return Promise.all(scheduleServices.map(scheduleService => this.checkAndUpdateSchedule(scheduleService)));
  }

  private async checkAndUpdateSchedule(scheduleService: IScheduleService): Promise<string> {
    const scheduleDb = await this.databaseService.getDb(scheduleService.getChannelId());

    let scheduleSite: ISchedules;

    try {
      scheduleSite = await scheduleService.getScheduleSite(
        this.languageService.getFullDaysOfWeek(scheduleService.getChannelLanguageCode()),
      );
    } catch (error) {
      return 'Error. No schedule from the site';
    }

    const scheduleSiteJSON = JSON.stringify(scheduleSite);

    if (scheduleDb !== scheduleSiteJSON) {
      const scheduleFormatted = scheduleService.formatSchedule(
        scheduleSite,
        this.languageService.getNewSchedulePhrase(scheduleService.getChannelLanguageCode()),
      );

      await this.databaseService.setDb(scheduleService.getChannelId(), scheduleSiteJSON);

      await this.telegramService.sendMessage({
        text: scheduleFormatted,
        replyMarkup: this.languageService.getDaysOfWeekStartButtons(scheduleService.getChannelLanguageCode()),
        chatId: scheduleService.getChannelId(),
      });

      if (scheduleDb) {
        const difference = scheduleService.getDifference(
          JSON.parse(scheduleDb),
          scheduleSite,
          this.languageService.getChangesPhrase(scheduleService.getChannelLanguageCode()),
        );

        if (difference) {
          await this.telegramService.sendMessage({
            text: difference,
            replyMarkup: '',
            chatId: scheduleService.getChannelId(),
          });
        }
      }

      return scheduleFormatted;
    }

    return 'Done. No new schedule from the site';
  }
}
