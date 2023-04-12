# Docker image name
IMAGE_NAME=backend-example

# Build Docker image
build:
    docker build -t $(IMAGE_NAME) .
    
hello:
	echo "Hello World"
