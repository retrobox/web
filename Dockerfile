FROM node
EXPOSE 80
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 80
ENV API_ENDPOINT https://api.retrobox.tech
ENV DOCS_ENDPOINT https://docs.retrobox.tech
ENV USER_DASHBOARD_ENDPOINT https://user.retrobox.tech
ENV ADMIN_DASHBOARD_ENDPOINT https://admin.retrobox.tech
ENV COOKIE_DOMAIN .retrobox.tech
ENV NEWSLETTER_ENDPOINT http://newsletter-api.retrobox.tech/
CMD [ "npm", "start" ]
