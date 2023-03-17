import React, { useState } from 'react'
import MutilineCorsel from './MutilineCorsel';
const Release = () => {
  const [swip, setSwip] = useState({marginLeft: "-250px"});
  const [textNFT, setTextNFT] = useState("black");
  const [textEP, setTextEP] = useState("white");
  const [textSingle, setTextSingle] = useState("white");
  const handleNFT = () =>{
    setSwip({marginLeft: "-250px",  transition: "0.5s"})
    setTextNFT("black");
    setTextEP("white");
    setTextSingle("white")
  }
   function handleEP(){
     setSwip({marginLeft: "2px" , transition: "0.5s"})
     setTextNFT("white");
    setTextEP("black");
    setTextSingle("white")
   }
   function handleSingle(){
     setSwip({marginLeft: "250px", transition: "0.5s"});
     setTextNFT("white");
    setTextEP("white");
    setTextSingle("black")
   }
  return (
    <div>
      <h5 className='release-heading'>New releases</h5>
     <div className="con"> 
     <span className='btn-background'  style={swip}></span>
     <div className="r-btns-container">
        <button className='btn-One' style={{color: textNFT}} onClick={handleNFT}>NFT</button>
        <button className='btn-two' onClick={handleEP} style={{color: textEP}}>EP</button>
        <button className='btn-two'onClick={handleSingle} style={{color: textSingle}}>Single</button>
      </div>
      </div>
         <MutilineCorsel/>
    </div>
  )
}

export default Release
