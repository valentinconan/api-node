
mkdir package

cp -R docker/ package/

docker build --no-cache --build-arg VERSION=0.1.0 -t valentinconan/api-node:0.1.0 .