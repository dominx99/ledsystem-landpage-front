up:
	@docker-compose up -d

down:
	@docker-compose down

restart: down up

build:
	@docker-compose exec nodejs yarn build
	@docker-compose exec nodejs yarn generate

heroku-push:
	git push heroku master
