FROM node

WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install -f
EXPOSE 5173

CMD ["npm","run","dev","--host", "0.0.0.0"]
