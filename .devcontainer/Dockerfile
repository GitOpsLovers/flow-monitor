FROM node:24.15.0-alpine3.22

RUN apk add --no-cache git bash

WORKDIR /app

COPY . .

WORKDIR /app/code

RUN COREPACK_INTEGRITY_KEYS=0 corepack enable && COREPACK_INTEGRITY_KEYS=0 corepack prepare pnpm@10.33.0 --activate

WORKDIR /app

CMD ["tail", "-f", "/dev/null"]