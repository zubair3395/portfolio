import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import kahani from "../../../../assests/songs/Kahani.mp3"
import Jhanjar from "../../../../assests/songs/jhanjar.mp3"
import chand from "../../../../assests/songs/chand.mp3"
import kalyan from "../../../../assests/songs/kalyan.mp3"
import miti from "../../../../assests/songs/miti.mp3"
import rafta from "../../../../assests/songs/rafta.mp3"
export default function Music() {
  const [isPlay, setIsPlay] = useState(true);
  const [source, setSource] = useState("/images/play.png")
  const [song, setSong] = useState(kahani)
  const myAudio = useRef()
  const handlePlay = () => {
    if(isPlay){
      myAudio.current.pause()
      setSource("/images/play.png");
      setIsPlay(false);
    }
    else{
      setIsPlay(true)
      myAudio.current.play()
      setSource("/images/playingMusic.png")
    }
   
 }
 const handleIncrease = () =>{
  myAudio.current.volume+=1
 }
 const handleDecrease = ()=>{
  myAudio.current.volume-=1
 }
 const handleKahani = ()=>{
  setSong(kahani)
 }
 const handleChan = ()=>{
  setSong(chand)
 }
 const handleKalyan = ()=>{
  setSong(kalyan)
 }
 const handleJahanjar=()=>{
  setSong(Jhanjar)
 }
 const handleRafta= ()=>{
  setSong(rafta)
 }
 const handleMiti=()=>{
  setSong(miti)
 }
  return (
    <div className='skalp-offer'>
      <div className="skalp">
        <img className='sklap-text' src="/images/slack.png" alt="" />
        <div className="sklap-items">
            <button onClick={handleKahani} className={isPlay? "anfag music_background": "anfag"}>
                <p>1.</p>
                <p>Kahani Suno</p>
                <p>...</p>
            </button>
            <button onClick={handleJahanjar} className="anfag">
                <p>2.</p>
                <p>Jahanjar</p>
                <p>...</p>
            </button>
            <button onClick={handleChan} className="anfag">
                <p>3.</p>
                <p>Chan sitary</p>
                <p>...</p>
            </button>
            <button onClick={handleKalyan} className="anfag">
                <p>4.</p>
                <p>Kalyan Reh</p>
                <p>...</p>
            </button>
            <button onClick={handleMiti} className="anfag">
                <p>5.</p>
                <p>Kaka-- Miti</p>
                <p>...</p>
            </button>
            <button onClick={handleRafta} className="anfag">
                <p>6.</p>
                <p>Rafta Rafta</p>
                <p>...</p>
            </button>
        </div>
        <div className='music-audio'>
            <img className='music-image' src="/images/music.png" alt="" />
            <img className='music-image1'  src="/images/music1.png" alt="" />
       <div className='react-player1'>
         <audio style={{display: "none"}} id='player' src={song} controls ref={myAudio}/>
         <div>
          <div className="play-btn">
            <button className="btn-play" onClick={handleDecrease}>
            <img src="/images/decrease.png" alt="" />
            <img src="/images/decrease.png" alt="" />
            </button>
          <button className="btn-play" onClick={handleDecrease}><img src="/images/decrease.png" alt="" /></button>
          <button className="btn-play" onClick={handlePlay}><img src={source} alt="" /></button>
          <button className="btn-play" onClick={handleIncrease}><img src="/images/increase.png" alt="" /></button>
           <button className="btn-play" onClick={handleIncrease}>
           <img src="/images/increase.png" alt="" />
           <img src="/images/increase.png" alt="" />
           </button>
          </div>
   
</div> 
        </div>
        <p className='streams'>63.63 Streams</p>
    </div>
      </div>
      <div className="offer">
        <img className='buy-picture' src="/images/7.png" alt="" />
        <p className='eth'>0,00047 ETH</p>
        <div className="btn-busy">
            <button className='buy-now'>Buy Now</button>
            <button className='offer-now'>Offer Now</button>
        </div>
      </div>
    </div>
  )
}
