FROM node:20

WORKDIR /usr/src/app
COPY . .

EXPOSE 42069

RUN npm ci

ENTRYPOINT [ "npm", "run", "start" ]