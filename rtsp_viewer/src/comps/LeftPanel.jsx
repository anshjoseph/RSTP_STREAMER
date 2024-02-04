import add_icon from '../assets/add.png'
import { useState, useEffect } from 'react';
import RtspButton from './RtspButton.jsx'

// eslint-disable-next-line react/prop-types
function LeftPanel({ setUrl }) {
  const [, forceRender] = useState(undefined);
  const [urls, setUrls] = useState(undefined);
  useEffect(() => {
    fetch('http://0.0.0.0:7123/get_urls/')
      .then((response) => response.json())
      .then((data) => {
        setUrls(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const createRTSP = () => {
    let rtsp_btn = []
    if (urls != undefined) {
      Object.keys(urls).forEach(ele => {
        rtsp_btn.push(<RtspButton setUrl={setUrl} url={urls[ele]} name={ele} setUrls={setUrl} urls={urls} forceRender={forceRender} />)
      })
    }
    return rtsp_btn
  }
  return (
    <div className="h-[95vh] w-[20vw] bg-slate-500 flex flex-col justify-around">
      <div className='flex flex-row justify-between items-baseline ml-2 mr-2'>
        <p className='text-2xl text-white'>RTSP Config</p>
        <img src={add_icon} alt="wait" className='h-5 w-5' onClick={() => {
          let link = prompt("enter the RTSP link")
          fetch('http://127.0.0.1:7123/add_rtsp/', {
            method: 'POST', // Method itself
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "rtsp_url": link
            }),
          })
            .then(response => response.json()) // Assuming the server responds with JSON
            .then(data => console.log(data)) // Handling the response data
            .catch(error => console.error('Error:', error));
        }} />
      </div>
      <hr></hr>

      <div className='flex flex-col ml-2 mr-2 mt-5 gap-y-3 mb-5 h-80 overflow-y-auto'>
        {/* <RtspButton setUrl={setUrl} url={"https://video.gumlet.io/5f462c1561cf8a766464ffc4/635789f017629894d4d125a4/main.m3u8"} name={"hell"} /> */}
        {
          createRTSP()
        }
      </div>

      <div className='flex flex-col border-2 border-grap-900 overflow-y-auto'>
        <p className='text-2xl text-white'>FAQ</p>
        <hr></hr>
        <div className='m-2 flex flex-col gap-y-3 h-40m'>
          <div>
            <p>1. How close Formatting option ?</p>
            <p>Ans: just double click the selected object again the formatting option is closed</p>
          </div>

          <div>
            <p>2. Importance of deleting un-used RTSP stream ?</p>
            <p>Ans: if you did not delete the RTSP stream it become a bigger problem as it will result in crashing of the RSTP coverter micro service because it did not have setting to let it scale and use full capabilty of docker </p>
          </div>
          <div>
            <p>3. add rtsp link not showing up ?</p>
            <p>Ans: just refresh the page </p>
          </div>
          <div>
            <p>4. overlay is not showing up ?</p>
            <p>Ans: click the refresh on right hand side </p>
          </div>
          <code>Sorry for shitty UI i am not good at UI, but i can do it better</code>
        </div>
      </div>

    </div>
  )
}

export default LeftPanel