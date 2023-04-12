build:
	git pull
	sudo docker build -t frontend-example . 
	sudo docker stop frontend-example
	sudo docker rm frontend-example
	sudo docker run -d --name frontend-example -p 80:80 frontend-example
