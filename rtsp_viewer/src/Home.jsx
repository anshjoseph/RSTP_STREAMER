// import React from 'react'
import LeftPanel from "./comps/LeftPanel.jsx"
import VideoSection from "./comps/VideoSection.jsx"

import { useState } from 'react';
function Home() {
    const [url, setUrl] = useState("");
    return (
        <>
            <div className="h-[100vh] w-[100vw] mr-5 ml-5">
                <div className="flex flex-row mt-1 gap-4">
                    
                <LeftPanel setUrl={setUrl}/>
                <div className="flex flex-col ml-3">
                    <div>
                        <VideoSection url={url} />
                    </div>
                   
                </div>
            </div>

        </div >

        </>

    )
}

export default Home