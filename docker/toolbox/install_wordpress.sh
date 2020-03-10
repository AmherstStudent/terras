#!/usr/bin/env sh

set -e

mysql_ready='nc -z db-headless 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

if wp core is-installed
then
    echo "WordPress is already installed, exiting." 
    exit
fi
rm -f wp-config.php

wp core download --force 
echo "⚙️ Configuring Wordpress database..."

wp config create \
    --dbhost="$WORDPRESS_DB_HOST" \
    --dbname="$WORDPRESS_DB_NAME" \
    --dbuser="$WORDPRESS_DB_USER" \
    --dbpass="$WORDPRESS_DB_PASSWORD" 

echo "⚙️ Configuring Wordpress parameters..."
wp core install \
    --url="$WORDPRESS_URL" \
    --title="$WORDPRESS_TITLE" \
    --admin_user="$WORDPRESS_ADMIN_USER" \
    --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
    --admin_email="$WORDPRESS_ADMIN_EMAIL" \
    --skip-email 

wp option update blogdescription "$WORDPRESS_DESCRIPTION"
wp rewrite structure "$WORDPRESS_PERMALINK_STRUCTURE"

wp theme activate postlight-headless-wp
wp theme delete twentysixteen twentyseventeen twentynineteen

wp plugin delete akismet hello
wp plugin install --activate --force \
    acf-to-wp-api \
    advanced-custom-fields \
    wordpress-importer \
    jwt-authentication-for-wp-rest-api \
    slate-admin-theme \
    co-authors-plus \
    https://github.com/wp-graphql/wp-graphql/archive/v0.4.0.zip \
    https://github.com/pristas-peter/wp-graphql-gutenberg/archive/v0.1.4.zip \
    /var/www/plugins/*.zip

wp term update category 1 --name="News" --slug="news"
wp term create category "Arts and Living"
wp term create category "Sports"
wp term create category "Opinion"
wp menu create "Header Menu"
wp post update 1 --post_title="Sample Post" --post_name=sample-post
wp import /var/www/postlightheadlesswpstarter.wordpress.xml --authors=skip

echo "Great. You can now log into WordPress at: $WORDPRESS_URL/wp-admin ($WORDPRESS_ADMIN_USER/$WORDPRESS_ADMIN_PASSWORD)"


