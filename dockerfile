FROM node:18

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install


CMD ["yarn","run","dev"]