build:
	git pull
	sudo docker build -t frontend-example . 
	sudo docker stop frontend-example
	sudo docker rm frontend-example
	sudo docker run -d --name frontend-example -p 8080:8080 frontend-example
