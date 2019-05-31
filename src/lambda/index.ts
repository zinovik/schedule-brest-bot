import * as dotenv from 'dotenv';

dotenv.config();

exports.handler = (event: any, context: any, callback: any) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hello: 'world',
    }),
  });
};
