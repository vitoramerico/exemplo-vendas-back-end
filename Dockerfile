FROM node:14.15.4-alpine3.10

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli
RUN npm i -g @prisma/client

USER node

WORKDIR /home/node/app