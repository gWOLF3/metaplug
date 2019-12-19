FROM node:lts-alpine

RUN apk update && apk add git

COPY ./package.json /

RUN npm i -g bitwork --ignore-scripts
RUN npm i -g event-stream

ENV NODE_PATH=/usr/local/lib/node_modules

COPY ./work.js /

CMD ["/usr/local/bin/node","work"]
