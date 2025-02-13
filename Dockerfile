FROM node:20

WORKDIR /usr/src/app
COPY . .

EXPOSE 42069

RUN npm ci

RUN npm run init

ENTRYPOINT [ "npm", "run", "start" ]