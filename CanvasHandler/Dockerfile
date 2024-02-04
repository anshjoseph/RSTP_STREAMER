FROM ubuntu

RUN apt update
RUN apt install -y python3 python3-pip

WORKDIR /app
COPY . .
RUN pip install -r requirement.txt
EXPOSE 7000
CMD [ "python3","app.py" ]