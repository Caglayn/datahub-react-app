FROM node:latest
COPY public/ /home/reactapp/public/
COPY src/ /home/reactapp/src/
COPY package*.json /home/reactapp/