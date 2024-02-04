import Video from "./Video.jsx"
import Canvas from "../canvas/Canvas.jsx";




// eslint-disable-next-line react/prop-types
function VideoSection({ url }) {
    console.log(url)
    


    return (
        <div className="w-[75vw] h-[70vh] bg-slate-300 flex flex-col">
            {/* <Video url={url}  ></Video> */}
            <Video url={"https://video.gumlet.io/5f462c1561cf8a766464ffc4/635789f017629894d4d125a4/main.m3u8"} />
            <Canvas />
        </div>
    )
}

export default VideoSection