FROM node:20.10-bookworm
ARG NODE_ENV=production
COPY ./ /home/node/app
RUN npm install -g nodemon
WORKDIR /home/node/app
RUN npm install
EXPOSE 4000
CMD npm start
