# Use Node.js to build the React app
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# Use Nginx to serve the static assets
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
