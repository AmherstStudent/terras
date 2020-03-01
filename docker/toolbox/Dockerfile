FROM php:7.4-cli-alpine

RUN apk add --no-cache curl  
RUN apk add --no-cache make
RUN apk add mariadb-client

# Install WP-CLI in the toolbox
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp-cli.phar && \
    echo '#!/bin/sh' >> /usr/local/bin/wp && \
    echo 'wp-cli.phar "$@" --allow-root' >> /usr/local/bin/wp && \
    chmod +x /usr/local/bin/wp

# Install MySQL extension, as WP-CLI needs to access to WordPress database
RUN docker-php-ext-install mysqli
# Add Makefile to scripts dir
COPY install_wordpress.sh /usr/local/bin/
RUN ln -s /usr/local/bin/install_wordpress.sh / # backwards compat

ENTRYPOINT ["install_wordpress.sh"]

