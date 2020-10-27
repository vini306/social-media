FROM  node:13-alpine
RUN mkdir  /home/app
WORKDIR /home/app/
COPY package.json .
RUN yarn 
COPY . .
EXPOSE 3000 