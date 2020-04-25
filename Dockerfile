FROM node
EXPOSE 80
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN if [ ! -f /usr/local/bin/yarn ]; then echo "Installing yarn..." && npm i -g yarn; else echo "Yarn found"; fi
RUN yarn
ENV API_ENDPOINT https://api.retrobox.tech
ENV ADMIN_DASHBOARD_ENDPOINT https://admin.retrobox.tech
ENV WS_ENDPOINT https://ws.retrobox.tech
ENV COOKIE_DOMAIN retrobox.tech
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 80
CMD [ "npm", "start" ]
