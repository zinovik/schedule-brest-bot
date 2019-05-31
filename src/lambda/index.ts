import * as dotenv from 'dotenv';

dotenv.config();

const handler = (event: any, context: any, callback: any) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hello: 'world',
    }),
  });
};

// if (!process.env.IS_NOW) {
//   createServer(handler).listen(6000);
// }

export default handler;
