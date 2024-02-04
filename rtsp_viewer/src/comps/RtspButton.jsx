import del_icon from '../assets/delete.png'
import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
function RtspButton({ setUrl, url, name, setUrls, urls, forceRender }) {
    const [none,Setnone] = useState('block')

    return (
        <div className="border-2 border-gray-300 cursor-pointer flex flex-row  justify-between items-baseline" style={{display:none}}>
            <p onClick={() => {
                setUrl(url)
            }} className='ml-2'>{name}</p>
            <img src={del_icon} alt="wait" className='h-5 w-5 mr-2' onClick={() => {
                let _urls = JSON.parse(JSON.stringify(urls))
                delete _urls[name]

                fetch('http://127.0.0.1:7123/rm_rtsp/', {
                    method: 'DELETE', // Method itself
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "rtsp_id": name
                    }),
                })
                    .then(response => response.json()) // Assuming the server responds with JSON
                    .then(data => {
                        console.log(data)
                        Setnone('none')
                        forceRender(prev => !prev)
                    }) // Handling the response data
                    .catch(error => console.error('Error:', error)); // Handling errors


                setUrls(_urls)
                forceRender((prev) => !prev)
            }} />

        </div>
    )
}

export default RtspButton