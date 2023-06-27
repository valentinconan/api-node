# node-api

## Main purpose
This project is an example of a quick-start project developed in node, exposing a rest API

## Technical details
The rest api is exposed using `express`

Two dockers are generated:
- one based on the official `node` image
- one based on the official `apline` image and embedding a native version of the node application, build with `pkg`

Each dockerfile builds the application directly
