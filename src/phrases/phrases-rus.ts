export const DAYS_OF_WEEK = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export const NEW_SCHEDULE = 'Новое расписание:';

export const CHANGES = 'Изменения:';

export const getDaysOfWeekButtons = (
  monday?: number,
  tuesday?: number,
  wednesday?: number,
  thursday?: number,
  friday?: number,
  saturday?: number,
  sunday?: number,
) => {
  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `ПН${monday ? ` (${monday})` : ''}`,
            callback_data: 'monday',
          },
          {
            text: `ВТ${tuesday ? ` (${tuesday})` : ''}`,
            callback_data: 'tuesday',
          },
          {
            text: `СР${wednesday ? ` (${wednesday})` : ''}`,
            callback_data: 'wednesday',
          },
          {
            text: `ЧТ${thursday ? ` (${thursday})` : ''}`,
            callback_data: 'thursday',
          },
          {
            text: `ПТ${friday ? ` (${friday})` : ''}`,
            callback_data: 'friday',
          },
          {
            text: `СБ${saturday ? ` (${saturday})` : ''}`,
            callback_data: 'saturday',
          },
          {
            text: `ВС${sunday ? ` (${sunday})` : ''}`,
            callback_data: 'sunday',
          },
        ],
      ],
    },
  };
};
