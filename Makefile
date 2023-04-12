build:
	git pull
	docker build -t backend-example . 
	docker stop backend-example
	doker rm backend-example
	docker run -d --name frontend-example -p 80:80 frontend-example
