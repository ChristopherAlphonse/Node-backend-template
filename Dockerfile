FROM node:lts

WORKDIR /usr/src/app

COPY .env ./
COPY tsconfig.json ./

COPY package.json yarn.lock ./
RUN yarn install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "yarn", "dev" ]
