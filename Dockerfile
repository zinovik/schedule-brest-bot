FROM node:12.6.0

# Create work directory
WORKDIR /app

# Copy app config files
COPY package.json ./
COPY package-lock.json ./

# Install app dependencies
RUN npm install

# Copy app source to work directory
COPY src ./src
COPY tsconfig.json ./
COPY tslint.json ./

# Build and run the app
CMD npm run start:lambda
