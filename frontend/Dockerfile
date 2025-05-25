# frontend/Dockerfile
FROM nginx:stable-alpine

# Copy your build output to the NGINX web directory
COPY dist /usr/share/nginx/html

# Copy the custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
