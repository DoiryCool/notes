FROM node:18.12-slim
WORKDIR /home/app
COPY . .
RUN npm install -ci
RUN npm run build
CMD ["npm", "start"]