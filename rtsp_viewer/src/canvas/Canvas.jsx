import ImagComp from "./ImagComp.jsx"
// import Video from "../comps/Video.jsx"
import ImagButton from "./ImagButton.jsx"

import { useState } from "react"
import TextButton from "./TextButton.jsx"


function Canvas() {
    // let [__img, setImg] = useState("")
    // const [, forceRender] = useState(undefined);

    let _data = []
    const [data, setData] = useState(_data)
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
                {buildImages()}

            </div>
            <div className="flex flex-row gap-8 mt-5">
                <TextButton setData={setData} data={data} />
                <ImagButton setData={setData} data={data} />
            </div>


        </div>

    )
}

export default Canvas