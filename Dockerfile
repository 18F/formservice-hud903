# pull official base image
FROM node

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY yarn.lock ./

RUN yarn install 

# add app
COPY . .

RUN yarn build 

EXPOSE 3000

# start app and serve-static
CMD ["yarn", "serve"]




