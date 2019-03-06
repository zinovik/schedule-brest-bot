FROM node:latest

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
RUN mkdir /usr/src/app/public
ADD public /usr/src/app/public/

RUN mkdir /usr/src/app/src
ADD src /usr/src/app/src/

COPY nodemon.json /usr/src/app/
COPY package.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY tslint.json /usr/src/app/

# Install app dependencies
RUN npm install

# Build and run the app
CMD npm run start:dev
