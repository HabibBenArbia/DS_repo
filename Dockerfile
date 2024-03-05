FROM node:small
Copy ..
WORKDIR /

Run npm install
EXPOSE 3000
