# Stage 1: Build the application
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency files first for better layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom Nginx config for SPA routing
COPY --from=build /app/dist /usr/share/nginx/html

# Support client-side routing (react-router-dom)
RUN printf 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
