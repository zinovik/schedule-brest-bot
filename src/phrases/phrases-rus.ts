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
            text: `ПН ${monday}`,
            callback_data: 'monday',
          },
          {
            text: `ВТ ${tuesday}`,
            callback_data: 'tuesday',
          },
          {
            text: `СР ${wednesday}`,
            callback_data: 'wednesday',
          },
          {
            text: `ЧТ ${thursday}`,
            callback_data: 'thursday',
          },
          {
            text: `ПТ ${friday}`,
            callback_data: 'friday',
          },
          {
            text: `СБ ${saturday}`,
            callback_data: 'saturday',
          },
          {
            text: `ВС ${sunday}`,
            callback_data: 'sunday',
          },
        ],
      ],
    },
  };
};
