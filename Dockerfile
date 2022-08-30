FROM node:16-alpine
WORKDIR /app

COPY src ./src/
COPY *.json ./

RUN npm ci