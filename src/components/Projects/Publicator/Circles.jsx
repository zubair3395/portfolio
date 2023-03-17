import React from 'react'

export default function Circles() {
  return (
    <>
      <div className="container-circle">
      <img className='image-circle' src="images/circle.png" alt="" />
      </div>

      <div className="upload-become">
        {/* <p className='upload'>Upload your own release now</p> */}
      </div>
       <div className="upload-trending">
        <div className="text-picture">
        <p className='upload'>Upload your own release now</p>
        <div className="upload-picture">
        <div className="launch">
         <img className='vector' src="/images/vector.png" alt="" />
         <p className='would'>Hey name would you like to launch your music carrer into orbit? *</p>
        </div>
        <div className="text-launch">
         <p className='could'>THIS COULD BE YOU</p>
         <p className='could-title'>YOUR NAME • YOUR TITLE</p>
        </div>
       </div>
        </div>
        <div className="text-picture">
        <p className='become'>Become investor and buy nft’s</p>
      <div className="trending-picture">
        <img className='artist-picture' src="/images/7.png" alt="" />
        <div className="text-launch">
         <p className='could2'>TRENDING NFT’S</p>
         <p className='could-title2'>MUSIC ARTIST • TITLE</p>
        </div>
      </div>
      </div>
       </div>
     
    </>
  )
}
