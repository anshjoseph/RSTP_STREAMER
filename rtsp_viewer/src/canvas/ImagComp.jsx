import { useState } from "react";
/* eslint-disable react/prop-types */
function ImagComp({ _data, data ,index , set_data }) {
    let __data = _data.slice()
    const [, forceRender] = useState(undefined);
    const [dis,setDis] = useState('none')
    console.log(data)
    if(data === undefined) return(<></>)
    return (
        <div style={{ marginLeft: data["x"], marginTop: data["y"], position: "sticky", zIndex: 100 }} className="flex flex-row gap-2 images">
            <div style={{position:"absolute"}}>
                <img src={data["content"]} height={data["h"]} width={data["w"]} alt="hello" onClick={()=>{
                if(dis == "none"){
                    setDis("block")
                }else setDis("none")
            }} />
            </div>

            <div className="h-80 w-[17vw] bg-slate-400 flex flex-col gap-5 " style={{display:dis,marginLeft:data["w"]+5}}>
                <h2 className="ml-4 mb-4 text-2xl text-white mt-3">Formatting option</h2>
                <input type="text" placeholder="height" id={`height_${index}`} className="ml-4 mb-4" defaultValue={data["h"]} onClick={(e)=>{
                    _data[index]['h'] = parseInt(e.target.value)
                    set_data(_data)
                }}/>
                <input type="text" placeholder="width" id={`width_${index}`} className="ml-4 mb-4" defaultValue={data["w"]} onClick={(e)=>{
                    _data[index]['w'] = parseInt(e.target.value)
                    set_data(_data)
                }}/>
                <input type="text" placeholder="x" id={`x_${index}`} className="ml-4 mb-4" defaultValue={data["x"]} onClick={(e)=>{
                    _data[index]['x'] = parseInt(e.target.value)
                    set_data(_data)
                }}/>
                <input type="text" placeholder="y" id={`y_${index}`} className="ml-4 mb-4" defaultValue={data["y"]} onClick={(e)=>{
                    _data[index]['y'] = parseInt(e.target.value)
                    set_data(_data)
                }}/>

                <div className="flex flex-row gap-2">   
                    <button className="border-2  border-rgray-400 ml-4 bg-gray-400 pl-3 pr-3" onClick={()=>{
                        let h = parseInt(document.getElementById(`height_${index}`).value)
                        let w = parseInt(document.getElementById(`width_${index}`).value)
                        let x = parseInt(document.getElementById(`x_${index}`).value)
                        let y = parseInt(document.getElementById(`y_${index}`).value)
                        __data[index]["h"] = h
                        __data[index]["w"] = w
                        __data[index]["x"] = x
                        __data[index]["y"] = y    
                        set_data(__data)
                        // console.log(_data)
                        forceRender((prev) => !prev)
                    }}>OK</button>
                    <button onClick={()=>{
                        __data.pop(index)
                        delete _data[index]
                        set_data(__data)
                        forceRender((prev) => !prev)
                        console.log(_data)
                    }}>Delete</button>
                </div>

            </div>
        </div>
    )
}

export default ImagComp