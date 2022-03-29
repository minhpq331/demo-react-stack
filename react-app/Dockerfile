FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]