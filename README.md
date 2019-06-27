[![Build Status](https://travis-ci.org/zinovik/schedule-brest-bot.svg?branch=master)](https://travis-ci.org/zinovik/schedule-brest-bot)

[![Netlify Status](https://api.netlify.com/api/v1/badges/30e90369-716d-45ce-a923-d8524546f80c/deploy-status)](https://app.netlify.com/sites/schedule-brest-bot/deploys)

**working**

1. fill .env

2. start project
```bash
docker-compose up
```
or
```bash
cd database_redis
docker-compose up

npm run start:lambda
```

3. setup bot
```bash
curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://schedule-brest-bot.netlify.com/.netlify/functions/callback
```

**testing**

```bash
curl https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<NGROK ID>.ngrok.io/callback
~/ngrok http 9000
```

**api**

https://schedule-brest-bot.netlify.com/.netlify/functions/ice-brest

https://schedule-brest-bot.netlify.com/.netlify/functions/dvvs-brest
