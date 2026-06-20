FROM node:20-alpine AS deps
WORKDIR /whitepaper
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

FROM node:20-alpine AS builder
WORKDIR /whitepaper
COPY --from=deps /whitepaper/node_modules ./node_modules
COPY . .
RUN corepack enable && yarn build

FROM node:20-alpine AS runner
WORKDIR /whitepaper
ENV NODE_ENV=production
COPY --from=builder /whitepaper/public ./public
COPY --from=builder /whitepaper/.next/static ./.next/static
COPY --from=builder /whitepaper/.next/standalone ./
EXPOSE 3000
CMD ["node", "server.js"]
