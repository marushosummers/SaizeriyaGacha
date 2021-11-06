run:
	docker-compose up -d
build:
	docker-compose build
clean-build:
	docker-compose build --no-cache
stop:
	docker-compose down
enter:
	docker-compose exec node /bin/bash
log:
	docker-compose logs -f node
