WP_CLI=wp-cli --allow-root

install: configure

configure:
	
	@echo "⚙️ Configuring Wordpress database..."
	$(WP_CLI) core download \
		--path=/var/www/html \
		--force 

	$(WP_CLI) core config \
		--dbhost=${WORDPRESS_DB_HOST} \
		--dbname=${WORDPRESS_DB_NAME} \
		--dbuser=${WORDPRESS_DB_USER} \
		--dbpass=${WORDPRESS_DB_PASSWORD} \
		--path=/var/www/html \
		--skip-check \
		--force
	
	@echo "⚙️ Configuring Wordpress parameters..."
	$(WP_CLI) core install \
		--url=${WORDPRESS_URL} \
		--title=${WORDPRESS_TITLE} \
		--admin_user=${WORDPRESS_ADMIN_USER} \
		--admin_password=${WORDPRESS_ADMIN_PASSWORD} \
		--admin_email=${WORDPRESS_ADMIN_EMAIL} \
		--path=/var/www/html \
		--skip-email

	$(WP_CLI) option update blogdescription ${WORDPRESS_DESCRIPTION}
	wp rewrite structure $(WORDPRESS_PERMALINK_STRUCTURE)

	$(WP_CLI) theme activate postlight-headless-wp
	$(WP_CLI) theme delete twentysixteen twentyseventeen twentynineteen

	$(WP_CLI) term update category 1 --name="News"
	$(WP_CLI) menu create "Header Menu"
	$(WP_CLI) menu item add-post header-menu 1
	$(WP_CLI) menu item add-post header-menu 2
	$(WP_CLI) menu item add-term header-menu category 1
	$(WP_CLI) menu location assign header-menu header-menu
	$(WP_CLI) post update 1 --post_title="Sample Post" --post_name=sample-post
	$(WP_CLI) import /var/www/postlightheadlesswpstarter.wordpress.xml --authors=skip

	@echo "Great. You can now log into WordPress at: amhstu"

