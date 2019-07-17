export interface IVoteService {
  processMessage(message: string): Promise<boolean>;
}
