FROM node
EXPOSE 80
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
ENV PORT 80
CMD [ "npm", "start" ]
