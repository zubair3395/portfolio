import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from './Categories';
import Release from './Release';
import Collectors from './Collectors';
import Circles from './Circles';
import ArtistStories from './ArtistStories';
import Plans from './Plans';
import Stream from './Stream';
import "../../../style/publicator.scss";
import routes from '../../../config/routes';
export default function HomePage() {
   const navigate = useNavigate();
  const handleUsername = ()=>{
     navigate(routes.projects.username)
  }
  return (
    <>
       <div className="home">
      <div className="container-main">

       <div className="text">
       <p className="heading">
       Upload your
       music and sell NFT’s → </p>
       <p className="tagLine">
       music distribution service for 
        artists with 100% royalty output & nfts
       </p>
         <div className="btn-container">
         <button className="btn-explore" onClick={handleUsername}>Explore →</button>
         <button className="btn-upload">Upload →</button>
         </div>
         <div className="btn-container">
         <svg className='svg-video' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M32 16C32 24.8375 24.8375 32 16 32C7.1625 32 0 24.8375 0 16C0 7.1625 7.1625 0 16 0C24.8375 0 32 7.1625 32 16ZM11 10.5V21.5C11 22.0438 11.2937 22.5437 11.7688 22.8062C12.2375 23.075 12.8188 23.0625 13.2812 22.7812L22.2812 17.2812C22.725 17.0063 23 16.525 23 16C23 15.475 22.725 14.9937 22.2812 14.7188L13.2812 9.21875C12.8188 8.88125 12.2375 8.925 11.7688 9.19375C11.2937 9.45625 11 9.95625 11 10.5Z" fill="white"/>
</svg>
     <p className="publicator">Discover the_publicator’s concept</p>
         </div>
       </div>
       <div className="slider3">
   {/* slider start  */}
   <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-block w-100">
      <div className="picture-container">
    <img className="img-sliderr" src="/images/1.png" alt="" />
   </div>
   <p className="trend">TRENDING THIS WEEK</p>
    <p className="trend">#1 • YOU • YOUR ALBUM</p>
      </div>
    
    </div>
    <div className="carousel-item">
    <div className="d-block w-100">
      <div className="picture-container">
    <img className="img-sliderr" src="/images/1.png" alt="" />
   </div>
   <p className="trend">TRENDING THIS WEEK</p>
    <p className="trend">&nbsp; #1 • YOU • YOUR ALBUM</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-block w-100">
      <div className="picture-container">
    <img className="img-sliderr" src="/images/1.png" alt="" />
   </div>
   <p className="trend">TRENDING THIS WEEK</p>
    <p className="trend"> #1 • YOU • YOUR ALBUM</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  {/*  Slider End */}
  
       </div>

      </div>
    </div>

    <Release/>
    {/* <Categories/> */}
    <Circles/>
    <Collectors/>
    <ArtistStories/>
    <Plans/>
    <Stream/>


    </>
  )
}
