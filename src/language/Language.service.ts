import { ILanguageService } from './ILanguageService.interface';

import { IPhrases } from './phrases/IPhrases.interface';
import { IReplyMarkup } from '../common/model/IReplyMarkup.interface';
import { en } from './phrases/en';
import { ru } from './phrases/ru';

const PHRASES: { [key: string]: IPhrases } = { en, ru };

export class LanguageService implements ILanguageService {
  getFullDaysOfWeek(languageCode: string): string[] {
    const phrases = this.getPhrases(languageCode);

    return phrases.fullDaysOfWeek;
  }

  getNewSchedulePhrase(languageCode: string): string {
    const phrases = this.getPhrases(languageCode);

    return phrases.newSchedule;
  }

  getChangesPhrase(languageCode: string): string {
    const phrases = this.getPhrases(languageCode);

    return phrases.changes;
  }

  getDaysOfWeekStartButtons(languageCode: string): string {
    const phrases = this.getPhrases(languageCode);

    const replyMarkup: IReplyMarkup = {
      inline_keyboard: [
        phrases.fullDaysOfWeek.map((fullDayOfWeek, index) => ({
          text: `${fullDayOfWeek[0]} 0`,
          callback_data: String(index),
        })),
      ],
    };

    return JSON.stringify(replyMarkup);
  }

  private getPhrases(languageCode: string): IPhrases {
    return PHRASES[languageCode] || PHRASES.en;
  }
}
