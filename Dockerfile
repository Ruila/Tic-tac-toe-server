FROM node:14

WORKDIR /usr/src/app

RUN npm install
COPY package*.json ./
COPY . /usr/src/app

EXPOSE 8888
CMD [ "node", "server.js" ]