FROM node:24-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS builder
WORKDIR /whitepaper
COPY . /whitepaper
RUN npm install --force
RUN npm run build

FROM public.ecr.aws/nginx/nginx-unprivileged:1.31.9-alpine-slim@sha256:75e85a09b0f25bd46d49a9fd85589ffa70b0459c8ed5ee0dc6596fd642e1f829
RUN echo 'absolute_redirect off;' > /etc/nginx/conf.d/absolute-redirect.conf
COPY --from=builder /whitepaper/build /usr/share/nginx/html
EXPOSE 8080
