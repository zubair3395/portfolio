import React from "react";

const Button = ({ value, onClick, }) => {
  return (
    <>
      <button className="btn btn-success p-3" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Button;
