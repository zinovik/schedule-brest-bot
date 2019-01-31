FROM node:latest

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
RUN mkdir /usr/src/app/hedgehogs
ADD hedgehogs /usr/src/app/hedgehogs/

RUN mkdir /usr/src/app/modules
ADD modules /usr/src/app/modules/

COPY .env /usr/src/app/
COPY nodemon.json /usr/src/app/
COPY index.ts /usr/src/app/
COPY package.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY tslint.json /usr/src/app/

# Install app dependencies
RUN npm install

# Build and run the app
CMD npm run start:dev
