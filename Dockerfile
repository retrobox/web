FROM node
LABEL maintainer="spamfree@matthieubessat.fr"
ADD . /app
WORKDIR /app
RUN apt-get update && apt-get -y upgrade
## install nginx
RUN apt-get install -y nginx
RUN rm /etc/nginx/sites-enabled/default
RUN cp /app/nginx.conf /etc/nginx/sites-enabled/default
RUN npm run build
RUN service nginx start
RUN service nginx restart
RUN service nginx stop
EXPOSE 80
CMD nginx -g "daemon off;"
