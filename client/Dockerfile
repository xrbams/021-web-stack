FROM nginx

WORKDIR /usr/share/client

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install npm -y


COPY package*.json ./
RUN npm install 

COPY . .
RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a build/. /usr/share/nginx/html/
