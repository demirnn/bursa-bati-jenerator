FROM node:20-slim

# Install the system Chromium browser. Apt-get will automatically resolve ALL UI/X11 dependencies (unlike Nixpacks).
RUN apt-get update && apt-get install -y chromium && rm -rf /var/lib/apt/lists/*

# Tell Puppeteer to skip downloading the massive cache version and use our fast system version
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app

# Optimize layer caching for dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Start the built app
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
