FROM node:latest

# Create work directory
WORKDIR /usr/src/app

RUN npm install yarn --global

# Copy app source to work directory
RUN mkdir /usr/src/app/src
ADD src /usr/src/app/src/

COPY package.json /usr/src/app/
COPY tslint.json /usr/src/app/

# Install app dependencies
RUN yarn

# Build and run the app
CMD yarn start:lambda
