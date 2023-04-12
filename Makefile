build:
	git pull
	sudo docker build -t backend-example . 
	sudo docker stop backend-example
	sudo docker rm backend-example
	sudo docker run -d --name frontend-example -p 80:80 frontend-example
