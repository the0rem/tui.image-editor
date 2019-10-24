FROM node:10

ADD . /app

WORKDIR /app

RUN yarn
RUN yarn bundle
RUN yarn bundle:svg