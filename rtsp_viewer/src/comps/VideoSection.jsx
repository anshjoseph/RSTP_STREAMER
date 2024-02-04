/* eslint-disable react/prop-types */
import Video from "./Video.jsx"
import Canvas from "../canvas/Canvas.jsx";
import { useState, useEffect } from 'react';



// eslint-disable-next-line react/prop-types
function VideoSection({ url }) {
    // console.log(url.split("/")[4])
    // console.log(`http://0.0.0.0:7000/get/?url=${url.split("/")[4]}`)
    // const [cdata, setCdata] = useState([]);
    // useEffect(() => {
    //     fetch(`http://0.0.0.0:7000/get/?url=${url.split("/")[4]}`)
    //         .then((response) => response.json())
    //         .then((data) => {
                
    //             console.log("hello loo")
    //             if (data[data] == undefined){
    //                 setCdata({})
    //             }else{
    //                 setCdata(JSON.parse(data[data]));
    //             }
    //             console.log(data)
    //             console.log(cdata)
                
    //         })
    //         .catch((err) => {
    //             console.log(err.message);
    //         });
    // }, []);
    return (
        <div className="w-[75vw] h-[70vh] bg-slate-300 flex flex-col">
            <Video url={url}  ></Video>
            {/* <Video url={"https://video.gumlet.io/5f462c1561cf8a766464ffc4/635789f017629894d4d125a4/main.m3u8"} /> */}
            <Canvas url={url}/>
        </div>
    )
}

export default VideoSection