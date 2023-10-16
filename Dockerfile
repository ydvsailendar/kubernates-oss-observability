FROM node:lts-alpine3.18

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 8000

RUN ls -la

CMD ["node", "server.js"]
