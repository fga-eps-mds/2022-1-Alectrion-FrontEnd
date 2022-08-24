FROM node:lts-alpine

RUN npm install -g serve

ENV NODE_OPTIONS=--max-old-space-size=512


WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build


CMD ["yarn", "start"]