export interface IEvent {
  path: string;
  httpMethod: string;
  queryStringParameters: never;
  headers: { [key: string]: string };
  body: string;
  isBase64Encoded: boolean;
}
