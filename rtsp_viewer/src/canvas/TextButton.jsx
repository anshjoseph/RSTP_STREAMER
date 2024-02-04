/* eslint-disable react/prop-types */
function TextButton({setData,data}) {
    return (
        <div id="text">
            <button onClick={()=>{
                let text = prompt("enter your text")
                let canvas = document.createElement("canvas")
                canvas.width = (200/6) * text.length
                canvas.height = 100 * (canvas.width/200) 
                let ctx = canvas.getContext('2d')
                ctx.font = "60px Arial"
                ctx.fillText(text, 10, 50);
                let base64_data = canvas.toDataURL()
                let _data = data.slice()
                _data.push({ "type": "img", "content": base64_data, "x": 10, "y": 10, "h": 100, "w": 100 })
                setData(_data)
                // console.log(_data)
                
            }} className="border-2 border-black cursor-pointer">Set Text</button>
            
        </div>

    )
}

export default TextButton