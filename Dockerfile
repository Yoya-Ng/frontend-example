FROM node:12-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build
