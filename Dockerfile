FROM node:10.16.3
MAINTAINER Y.jer
ENV NODE_ENV=production
ENV HOST 0.0.0.0
RUN mkdir -p /xxx
COPY . /xxx
WORKDIR /xxx
EXPOSE 3000
#此为cnpm淘宝镜像
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]
