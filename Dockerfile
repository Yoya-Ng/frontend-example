# syntax=docker/dockerfile:1.2

# Set the base image to node:12-alpine
FROM node:12-alpine as base

# Specify where our app will live in the container
WORKDIR /app

# Copy the package.json and lock file to the container
COPY package*.json yarn.* ./

# Install the dependencies with cache
RUN npm install

# Build stage
FROM base as build

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
