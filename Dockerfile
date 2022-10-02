FROM node:lts-alpine

RUN npm install -g serve

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build

CMD ["yarn", "start"]