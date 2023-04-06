# # 第一个阶段：构建依赖项镜像
# FROM node:12-alpine as dependencies

# WORKDIR /app
# COPY package*.json ./
# RUN npm install --production
# RUN cp -R node_modules /app/

# 第二个阶段：构建应用程序镜像
FROM node:12-alpine as app

WORKDIR /app
COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

# Prepare nginx
# Pull nginx base image
FROM nginx:1.17.1-alpine

# Build file to nginx
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
