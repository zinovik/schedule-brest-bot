export class BaseService {
  constructor(private readonly channelId: string, private readonly languageCode: string) {
    this.channelId = channelId;
    this.languageCode = languageCode;
  }

  getChannelId(): string {
    return this.channelId;
  }

  getChannelLanguageCode(): string {
    return this.languageCode;
  }
}
