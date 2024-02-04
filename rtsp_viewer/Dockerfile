FROM node

WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install -f

CMD ["npm","run","dev"]
