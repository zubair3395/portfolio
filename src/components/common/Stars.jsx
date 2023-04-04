import React from "react";

const Stars = ({color}) => {
  return (
    <>
      <div className={`divider-custom divider-${color}`}>
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};

export default Stars;
