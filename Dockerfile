# Use the lightweight Nginx Alpine image
FROM nginx:stable-alpine

# Set the working directory to Nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy your static files from the host to the container
# (Assuming your website files are in the same folder as the Dockerfile)
COPY dist .

# Containers run on port 80 by default for Nginx
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
