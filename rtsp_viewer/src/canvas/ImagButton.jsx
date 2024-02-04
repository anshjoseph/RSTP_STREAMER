


// eslint-disable-next-line react/prop-types
function ImagButton({setData,data}) {

    const convertToBase64 = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // eslint-disable-next-line react/prop-types
        let _data = data.slice()
        _data.push({ "type": "img", "content": reader.result, "x": 10, "y": 10, "h": 100, "w": 100 })
        setData(_data)
      };
      reader.onerror = (error) => {
        console.log('Error converting to base64:', error);
      };
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        convertToBase64(file);
      }
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} accept="image/*" />
      </div>
    );
}

export default ImagButton