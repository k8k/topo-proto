FROM node:boron

# make app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install deps
COPY package.json /usr/src/app
RUN npm install

# bundle app
COPY . /usr/src/app
EXPOSE 8000

CMD ["npm", "start"]
