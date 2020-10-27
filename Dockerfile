FROM node:12

WORKDIR /app


COPY ./package.json ./

RUN npm install

RUN npm install react-scripts -g

COPY . ./

CMD ["npm", "start"]
