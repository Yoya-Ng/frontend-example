

# Set the base image to node:12-alpine
FROM node:12-alpine as build

# Specify where our app will live in the container
WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the React App to the container
COPY . /app/

# We want the production version
RUN npm run build

# Prepare nginx
# Pull nginx base image
FROM nginx:1.17.1-alpine

# Build file to nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
