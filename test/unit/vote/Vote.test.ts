import { IMock, Mock, Times } from 'typemoq';

import { VoteService } from '../../../src/vote/Vote.service';
import { ITelegramService } from '../../../src/telegram/ITelegramService.interface';

describe('Scheduler', () => {
  let telegramServiceMock: IMock<ITelegramService>;

  let voteService: VoteService;

  beforeEach(() => {
    telegramServiceMock = Mock.ofType<ITelegramService>();

    voteService = new VoteService(telegramServiceMock.object);
  });

  afterEach(() => {
    telegramServiceMock.verifyAll();
  });

  it('Should update telegram message', async () => {
    // Arrange
    const channelId = 'test-channel-id';
    const formatedSchedule = 'formated-schedule';
    const data = '3';
    const messageId = 'message-id';
    const oldReplyMarkup = {
      inline_keyboard: [
        [
          {
            text: 'A 1',
            callback_data: data,
          },
        ],
      ],
    };
    const newReplyMarkup = {
      inline_keyboard: [
        [
          {
            text: 'A 2',
            callback_data: data,
          },
        ],
      ],
    };
    const message = {
      callback_query: {
        data,
        message: {
          text: formatedSchedule,
          message_id: messageId,
          chat: { id: channelId },
          reply_markup: oldReplyMarkup,
        },
      },
    };
    telegramServiceMockEditMessageText(formatedSchedule, JSON.stringify(newReplyMarkup), channelId, messageId);

    // Act
    await voteService.processMessage(JSON.stringify(message));

    // Assert
    expect(true).toBeTruthy();
  });

  function telegramServiceMockEditMessageText(text: string, replyMarkup: string, chatId: string | number, messageId: string) {
    telegramServiceMock
      .setup((x: ITelegramService) => x.editMessageText({ text, replyMarkup, chatId, messageId }))
      .returns(async () => undefined)
      .verifiable(Times.once());
  }
});
