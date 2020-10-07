FROM node:10

WORKDIR /tecpay_auth

COPY package.json ./

RUN npm install -g nodemon --no-progress --ignore-optional

RUN npm install --no-progress --ignore-optional

CMD npm run dev