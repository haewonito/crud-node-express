FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

WORKDIR /home/app
COPY ./ /home/app
RUN npm install

CMD ["node", "/home/app/server.js"]