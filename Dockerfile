FROM node:18.13.0
COPY . .
RUN npm install
RUN npm run build
RUN mkdir ./dist/logs/ && touch ./dist/logs/app.log
EXPOSE 3000
CMD ["node", "./dist/app.js"]