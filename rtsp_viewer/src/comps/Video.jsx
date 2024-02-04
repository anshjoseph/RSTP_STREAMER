
import ReactHlsPlayer from '@gumlet/react-hls-player';
// eslint-disable-next-line react/prop-types
function Video({url}) {
    console.log(url)
    return (
        <div className="w-[50vw] h-[50vh] items-center mt-5 ml-[10%] justify-center absolute">
            <ReactHlsPlayer
                src={url}
                autoPlay={false}
                controls={true}
                width={550}
                height={400}  
            />
        </div>
    )
}

export default Video