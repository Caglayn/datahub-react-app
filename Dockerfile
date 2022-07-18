FROM caglayn/debiannodejs:latest
COPY public/ /home/reactapp/public/
COPY src/ /home/reactapp/src/
COPY package*.json /home/reactapp/
RUN npm install
RUN npm install -g serve
EXPOSE 3000
WORKDIR /home/
ENTRYPOINT ["serve", "reactapp"]