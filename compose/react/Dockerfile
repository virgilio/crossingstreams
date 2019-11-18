FROM node:12.2.0-alpine

RUN apk update \
  && apk add shadow

RUN usermod -u 1001 node
RUN groupmod -g 1001 node

ENV PATH /app/node_modules/.bin:$PATH
COPY ./compose/react/start /start
RUN chmod +x /start

WORKDIR /app
RUN chown -R node:node /app

USER node

CMD ["/start"]