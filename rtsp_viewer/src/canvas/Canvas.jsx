/* eslint-disable react/prop-types */
import ImagComp from "./ImagComp.jsx"
// import Video from "../comps/Video.jsx"
import ImagButton from "./ImagButton.jsx"
import React from "react";
import { useState, useEffect } from "react"
import TextButton from "./TextButton.jsx"


function Canvas({ url }) {
    // let [__img, setImg] = useState("")
    const [, updateState] = React.useState();
 const forceUpdate = React.useCallback(() => updateState({}), []);

    let _data = []
    const [data, setData] = useState(_data)
    console.log(`http://0.0.0.0:7000/get/?url=${url.split("/")[4]}`)
    // 
    const buildImages = () => {
        let img = [];
        console.log(data.length)
        for (var i = 0; i < data.length; i++) {
            console.log(i)
            img.push(<ImagComp _data={data} data={data[i]} index={i} set_data={setData} />)
        }
        return img
    }
    return (
        <div className="flex flex-col">
            <div className="h-[70vh] w-[75vw] border-2 border-rose-500">

                {/* <Video url={"https://video.gumlet.io/5f462c1561cf8a766464ffc4/635789f017629894d4d125a4/main.m3u8"} /> */}
                {

                    buildImages()
                    
                    
                }

            </div>
            <div className="flex flex-row gap-8 mt-5">
                <TextButton setData={setData} data={data} />
                <ImagButton setData={setData} data={data} />
                <button onClick={() => {
                    fetch('http://127.0.0.1:7000/save/', {
                        method: 'POST', // Method itself
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "url": url.split("/")[4],
                            "data": JSON.stringify(data)
                        }),
                    })
                        .then(response => response.json()) // Assuming the server responds with JSON
                        .then(data => console.log(data)) // Handling the response data
                        .catch(error => console.error('Error:', error));
                }}>SAVE</button>
                <button onClick={()=>{
                    fetch(`http://0.0.0.0:7000/get/?url=${url.split("/")[4]}`)
                    .then((response) => response.json())
                    .then((_data) => {
                        
                        console.log("hello loo")
                        if (_data["data"] == undefined){
                            setData([]) 
                        }else{
                            console.log(`hoho ${JSON.parse(_data["data"])}`)
                            setData(JSON.parse(_data["data"]));
                            forceUpdate()
                        }
                        console.log(data)
                        console.log(_data)
                        
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
                }}>Refresh</button>
            </div>


        </div>

    )
}

export default Canvas