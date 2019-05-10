FROM node
ENV NPM_CONFIG_LOGLEVEL info
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "start"]

# docker build -t auth-container .
# 
# For Development Container
# sudo docker run -dt --network host --name=auth-container -v $PWD:/app auth-container
# 
# For Production Container
# sudo docker run -dt --restart=always --network host --name=auth-container -v $PWD:/app auth-container
# 
# Remove the container
# docker rm -f auth-container

# docker logs --follow auth-container
# docker exec -it auth-container bash

