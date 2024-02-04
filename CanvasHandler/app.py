from pymongo import MongoClient
from fastapi import FastAPI
from uuid import uuid4
import uvicorn
import pydantic 
from fastapi.middleware.cors import CORSMiddleware 
client = MongoClient("localhost", 27017)

class Data(pydantic.BaseModel):
    url:str
    data:str

DB = client["CanvasEle"]
Collection = DB["ele"]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/save/")
def save(data:Data):
    _data = Collection.find_one({ "url": data.url })
    if data == None:
        Collection.insert_one({"url":data.url,"data":data.data})
    else:
        Collection.update_one({ "url": data.url },{ "$set": { "data": data.data } }
)
    return {"url":data.url,"data":data.data}

@app.get("/get/")
def get(url:str):
    data = Collection.find_one({ "url": url })
    print(data)
    print(url)
    if data != None:
        return {'url': data["url"], 'data': data["data"]}
    return {}


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", reload=True, port=7000)

