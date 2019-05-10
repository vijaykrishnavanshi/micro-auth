FROM node
ENV NPM_CONFIG_LOGLEVEL info
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "start"]

# docker build -t travel-log-container .
# 
# For Development Container
# sudo docker run -dt --network host --name=travel-log-container -v $PWD:/app travel-log-container
# 
# For Production Container
# sudo docker run -dt --restart=always --network host --name=travel-log-container -v $PWD:/app travel-log-container
# 
# Remove the container
# docker rm -f travel-log-container

# docker logs --follow travel-log-container
# docker exec -it travel-log-container bash

