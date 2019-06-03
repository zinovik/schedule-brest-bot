[![Build Status](https://travis-ci.org/zinovik/schedule-brest-bot.svg?branch=master)](https://travis-ci.org/zinovik/schedule-brest-bot)

[![Netlify Status](https://api.netlify.com/api/v1/badges/30e90369-716d-45ce-a923-d8524546f80c/deploy-status)](https://app.netlify.com/sites/schedule-brest-bot/deploys)

1: 
```bash
.env
```

2:
```bash
docker-compose up
```
or
```bash
yarn
yarn start:lambda
```

https://schedule-brest-bot.netlify.com/.netlify/functions/ice-brest

https://schedule-brest-bot.netlify.com/.netlify/functions/dvvs-brest

(Setup: https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://schedule-brest-bot.netlify.com/.netlify/functions/callback)
