
# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## Display this help message.
	@echo "Please use \`make <target>' where <target> is one of"
	@awk -F ':.*?## ' '/^[a-zA-Z]/ && NF==2 {printf "\033[36m  %-28s\033[0m %s\n", $$1, $$2}' Makefile | sort

requirements: ## install development environment requirements
	pip install -r requirements.txt

run: ## run the app
	export FLASK_APP=app.py
	set FLASK_APP=app.py
	python run.py

build.dev: ## build the app on a server
	make requirements
	make run
