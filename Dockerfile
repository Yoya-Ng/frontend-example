# Set the base image to node:12-alpine
FROM node:12-alpine as base

# Specify where our app will live in the container
WORKDIR /app

# Copy the package.json and lock file to the container
COPY package*.json ./

# Install the dependencies with cache
RUN npm install

# Create a new image that only contains the installed dependencies
FROM node:12-alpine as dependencies

# Specify where our app will live in the container
WORKDIR /app

# Copy the package.json and lock file to the container
COPY package*.json ./

# Install the dependencies with cache
RUN npm install --only=production

# Copy the installed dependencies to a new folder
RUN cp -R node_modules prod_node_modules

# Build stage
FROM node:12-alpine as build
WORKDIR /app
COPY . /app/
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Prepare nginx
# Pull nginx base image
FROM nginx:1.17.1-alpine

# Build file to nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
