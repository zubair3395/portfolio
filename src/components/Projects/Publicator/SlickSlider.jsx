import React from 'react';
import Slider from 'react-slick';
export default function SlickSlider() {
    const settings= {
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                // slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 2,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 1
              }
            }
          ]
    }
  return (
    <div className='slick-slider-set'>
      <Slider {...settings}>
        
      <div className="category-items d-flex ">
           
           <img className="category-img"  src="/images/5.png" alt="" />
       
       <div className="category-text">
           HIP/HOP RAP
       </div>
     </div>
     <div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/1.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/2.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/3.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/4.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/5.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/5.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/1.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/2.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
<div className="category-items d-flex ">
      
      <img className="category-img"  src="/images/3.png" alt="" />
  
  <div className="category-text">
      HIP/HOP RAP
  </div>
</div>
          
      </Slider>
    </div>
  )
}
