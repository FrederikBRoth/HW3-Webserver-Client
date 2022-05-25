FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY  /build/ .
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf