import * as dotenv from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';

dotenv.config();

const handler = (_: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    hello: 'world',
  }));
};

// if (!process.env.IS_NOW) {
//   createServer(handler).listen(6000);
// }

export default handler;
