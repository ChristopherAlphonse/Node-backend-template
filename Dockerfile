FROM node:lts

WORKDIR /usr/src/app

COPY .env ./
COPY tsconfig.json ./

COPY package.json pnpm.lock ./
RUN pnpm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN pnpm build

EXPOSE 8080
CMD [ "pnpm", "dev" ]
