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

export const DAYS_OF_WEEK_BUTTONS = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'ПН',
          callback_data: 'monday',
        },
        {
          text: 'ВТ',
          callback_data: 'tuesday',
        },
        {
          text: 'СР',
          callback_data: 'wednesday',
        },
        {
          text: 'ЧТ',
          callback_data: 'thursday',
        },
        {
          text: 'ПТ',
          callback_data: 'friday',
        },
        {
          text: 'СБ',
          callback_data: 'saturday',
        },
        {
          text: 'ВС',
          callback_data: 'sunday',
        },
      ],
    ],
  },
};
