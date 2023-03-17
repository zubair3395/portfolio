import React, { useState } from 'react'

export default function Plans() {
  const [swip, setSwip] = useState({marginLeft: "-140px"});
  const [year, setYear] = useState("white");
  const [month, setMonth] = useState("black")
 const handleMonth = () =>{
  setSwip({marginLeft: "-140px", transition: "0.5s"})
  setMonth("black");
  setYear("white")
 }
 const handleYear=()=>{
  setSwip({marginLeft: "135px", transition: "0.5s"})
  setYear("black")
  setMonth("white")
 }
  return (
    <>
      <p className='release-heading'>Choose your plan</p>
      <div className="con">
        <span className='year-btn-background' style={swip}></span>
      <div className="month">
        <button className="btn-month" style={{color: month}} onClick={handleMonth}>Month</button>
        <button className="btn-year" style={{color: year}} onClick={handleYear}>Year</button>
      </div>
      </div>
      <div className="plan-main-container">
      <div className="plan-container">
        <p className='pro-plan'>Pro Plan</p>
        <p className='plan-price'>$ 9.99</p>
        <p className='tick'>
            ✔️ unlimited releases <br /> <br />
            ✔️ 100% royalty output <br /> <br />
            ✔️ YouTube Content ID & TikTok <br /> <br />
            ✔️ 24h quality control <br /> <br />
            ✔️ priority customer support <br /> <br />
            ✔️ full nft package
          </p>
          <button className="btn-plan">Choose plan →  </button>
      </div>
      <div className="plan-container">
        <p className='pro-plan'>Basic Plan</p>
        <p className='plan-price'>$ 4.99</p>
        <p className='tick'>
        ✔️ unlimited releases <br /> <br />

        ✔️ 100% royalty output <br /> <br />

       ✔️ YouTube Content ID & TikTok <br /> <br />

        ✔️ 24h quality control
          </p>
          <button className="btn-plan">Choose plan →  </button>
      </div>
      <div className="plan-container">
        <p className='pro-plan'>Free Plan</p>
        <p className='plan-price'>Free</p>
        <p className='tick'>
        ✔️ features coming soon
          <br /> <br />
       ✔️ free for everyone
           <br /> <br />
       ✔️ free forever
          </p>
          <button className="btn-plan">Choose plan →  </button>
      </div>
      </div>

    </>
  )
}
