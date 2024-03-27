import React, { useState } from "react";
// import Y from '../../assets/youtube.png'
// import I from '../../assets/insta.png'
// import X from '../../assets/x.png'

import "./Body.css"
const Body = () => {
    const [selectSocial,setSelectSocial] = useState('Youtube')
    const [url,setUrl]= useState()
    const [visibleButton,setVisibleButton]= useState(false)
    const handleSelectSocial = (name)=>{
    
        setSelectSocial(name)
        
    }
    // const handleSearchURL= async()=>{
    //     try{
    //         const response = await axios.post(`BackendURL/api/url`,{payload:url,type:selectSocial})
    //         if(response.data.status){
    //             setVisibleButton(true)
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    console.log("selection : ",selectSocial)
  return (
    <div className="body-container">
      <div className="image-container">
        <button  className="image-box" onClick={()=>handleSelectSocial('Youtube')} >
          <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="YOUTUBE" />
        </button>
        <button className="image-box" onClick={()=>handleSelectSocial('Instagram')} >
          <img src={`${process.env.PUBLIC_URL}/images/insta.png`} alt="INSTAGRAM" />
        </button>
        <button  className="image-box" onClick={()=>handleSelectSocial('Twitter')}  >
          <img src={`${process.env.PUBLIC_URL}/images/x.png`} alt="TWITTER" />
        </button>
      </div>

      <div className="card">
      <div className="title">{selectSocial} Video Downloader</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Paste video link here...."
          className="search-bar"
        />
        <button className="download-button" >Search</button>
      </div>
      <button onClick={()=>setVisibleButton(true)}>Check Visible</button>
      <div className="button-container" style={{display:visibleButton?'':'none'}}>
        <button className="button">Download Video</button>
        <button className="button">Download Audio</button>
      </div>
    </div>
    </div>
  );
};

export default Body;
