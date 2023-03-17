import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Slider from "react-slick"

export default function MutilineCorsel() {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
// const settings= {
//   // className: "center",
//   infinite: true,
//   slidesToShow: 3,
//   speed: 500,
//   slidesPerRow: 1,
//   dots: true,
//   responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           // slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           // slidesToScroll: 2,
//           // initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           // slidesToScroll: 1
//         }
//       }
//     ]
// }
  return (
    <dic className="slick-slider-set">
      <Carousel responsive={responsive} dots={true}>
         
      <div className="img-controller">
          <img className="img-abc" src="/images/2.png"/>
          <p className="img-b-text">TRENDING THIS WEEK</p>
          <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
          <div className="img-controller">
          <img className="img-abc" src="/images/3.png"/>
         <p className="img-b-text">TRENDING THIS WEEK</p>
          <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
          <div className="img-controller">
          <img className="img-abc" src="/images/2.png"/>  
         <p className="img-b-text">TRENDING THIS WEEK</p>
          <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
          <div className="img-controller">
          <img className="img-abc" src="/images/3.png"/>
          <p className="img-b-text">TRENDING THIS WEEK</p>
           <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
          <div className="img-controller">
          <img className="img-abc" src="/images/2.png"/>    
           <p className="img-b-text">TRENDING THIS WEEK</p>
           <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
          <div className="img-controller">
          <img className="img-abc" src="/images/1.png"/> 
              <p className="img-b-text">TRENDING THIS WEEK</p>
          <p className="img-b-text">CKAY • CKAY THE FIRST</p>
          </div>
      </Carousel>
    </dic>
  )
}
