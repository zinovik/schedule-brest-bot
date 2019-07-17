export const DAYS_OF_WEEK = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

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
): string => {
  return JSON.stringify({
    inline_keyboard: [
      [
        {
          text: `П ${monday}`,
          callback_data: 'monday',
        },
        {
          text: `В ${tuesday}`,
          callback_data: 'tuesday',
        },
        {
          text: `С ${wednesday}`,
          callback_data: 'wednesday',
        },
        {
          text: `Ч ${thursday}`,
          callback_data: 'thursday',
        },
        {
          text: `П ${friday}`,
          callback_data: 'friday',
        },
        {
          text: `С ${saturday}`,
          callback_data: 'saturday',
        },
        {
          text: `В ${sunday}`,
          callback_data: 'sunday',
        },
      ],
    ],
  });
};
