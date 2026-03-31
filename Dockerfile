FROM ghcr.io/puppeteer/puppeteer:latest

# Set environment variables for Puppeteer cache bypassing
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# The base image uses `pptruser` but we might need root to do standard npm installations and Vite builds
USER root

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Build the Vite application & trigger prerender script
RUN npm run build

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
