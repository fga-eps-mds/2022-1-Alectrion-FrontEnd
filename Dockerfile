FROM node:lts-alpine

ENV NODE_OPTIONS=--max-old-space-size=512
WORKDIR /app

COPY . /app

RUN yarn 

CMD ["yarn", "start"]