import React from "react";

const PortfolioCard = ({ src, style, title }) => {
  return (
    <>
    
        <div className="portfolio-item mx-auto">
          <img className="img-fluid" src={src} alt="..." style={style}/>
         
        </div>
        <strong style={{marginLeft: "8rem"}}>{title}</strong>
    
    </>
  );
};

export default PortfolioCard;
