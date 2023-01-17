FROM node:lts
WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]