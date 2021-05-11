FROM node:alpine
RUN apk add --no-cache git
RUN apk add --no-cache openssh
RUN apk add --no-cache yarn
RUN mkdir -p /application
COPY . /application/
WORKDIR /application

RUN yarn install
RUN yarn add nuxt

EXPOSE 80

CMD [ "yarn", "dev" ]
