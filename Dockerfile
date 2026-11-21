FROM node:26-alpine@sha256:6bd9ab43c0ec0190ca7b2d193906cb8b7edf6e7f4afa43ddeccd6452710bffb5 AS builder
WORKDIR /whitepaper
COPY . /whitepaper
RUN npm install --force
RUN npm run build

FROM public.ecr.aws/nginx/nginx-unprivileged:1.31.9-alpine-slim@sha256:75e85a09b0f25bd46d49a9fd85589ffa70b0459c8ed5ee0dc6596fd642e1f829
RUN echo 'absolute_redirect off;' > /etc/nginx/conf.d/absolute-redirect.conf
COPY --from=builder /whitepaper/build /usr/share/nginx/html
EXPOSE 8080
