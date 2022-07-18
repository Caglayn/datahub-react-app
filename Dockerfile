FROM caglayn/debiannodejs:latest
COPY public/ /home/reactapp/public/
COPY src/ /home/reactapp/src/
COPY package*.json /home/reactapp/
COPY .env /home/reactapp/.env
WORKDIR /home/reactapp/
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]