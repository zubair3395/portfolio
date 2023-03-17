import React from "react";

const InputField = ({ type, value, name, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        onChange={onChange}
        style={{ fontSize: "17px" }}
      />
    </>
  );
};

export default InputField;
