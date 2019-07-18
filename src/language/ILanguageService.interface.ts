export interface ILanguageService {
  getFullDaysOfWeek(languageCode: string): string[];
  getNewSchedulePhrase(languageCode: string): string;
  getChangesPhrase(languageCode: string): string;
  getDaysOfWeekStartButtons(languageCode: string): string;
}
