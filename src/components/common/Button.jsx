import React from "react";

const Button = ({ value, onClick, style}) => {
  return (
    <>
      <button className="btn btn-success p-3" onClick={onClick} style={style}>
        {value}
      </button>
    </>
  );
};

export default Button;
