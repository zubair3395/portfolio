import React from "react";
import { useState } from "react";
import '../../../style/calculator.css';
import {calculatorData} from "../../../constants/calculatorDigits";
import { toast } from "react-toastify";
export default function Calculator() {
  const [isClicked, setIsClicked] = useState(false);
  const [values, setValues] = useState({
    num1: "",
    num2: "",
  });
  const [operate, setOperate] = useState("");
  const handleValues = (e) => {
    e.preventDefault();
    const { value } = e.target;
    isClicked === false
      ? setValues({ ...values, num1: values.num1 + value })
      : setValues({ ...values, num2: values.num2 + value });
  };
  const handleResult = (e) => {
    e.preventDefault();
    let tempRes = 0;
    if (operate === "+") {
      tempRes = parseFloat(values.num1) + parseFloat(values.num2);
    } else if (operate === "-") {
      tempRes = parseFloat(values.num1) - parseFloat(values.num2);
    } else if (operate === "/") {
      if (parseInt(values.num2) === 0) {
        toast("Second number can't be zero"); 
      } else {
        tempRes = parseFloat(values.num1) / parseFloat(values.num2);
      }
    } else if (operate === "*") {
      tempRes = parseFloat(values.num1) * parseFloat(values.num2);
    } else {
      tempRes = 0;
    }
    setValues({ ...values, num1: tempRes, num2: ""});
    setOperate("");
    setIsClicked(false);
  };
  const handleClear = (e) => {
    e.preventDefault();
    const tempArr = values.num1.slice(0, -1);
    setValues({ ...values, num1: tempArr });
  };
  const handleOperation = (e) => {
    console.log("operate: ", e.target.value)
    e.preventDefault();
    setOperate(e.target.value);
    setIsClicked(true);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div>
      <div className="container2" style={{border: "1px solid green", width:" 500px", margin: "auto"}}>
        <form action="" name="calc" className="calculator">
          <input
            type="number"
            className="value"
            name="txt"
            value={values.num1 ? values.num1 : 0}
            readOnly
          />
          <input
            type="text"
            className="value"
            name="txt"
            value={operate}
            readOnly
          />
          <input
            type="number"
            className="value"
            name="txt"
            value={values.num2}
            readOnly
          />
          <button className="num clear" onClick={handleCancel}>
            <i>C</i>
          </button>
          {calculatorData.digits.map((digit, index) => (
            <button
              key={index}
              className="num"
              onClick={handleValues}
              value={digit.value}
            >
              <i>{digit.value}</i>
            </button>
          ))}
          {calculatorData.oprators.map((oprator, index) => (
            <button
              key={index}
              className="num"
              onClick={handleOperation}
              value={oprator.operate}
            >
              <i>{oprator.operate}</i>
            </button>
          ))}
          <button className="num equal clear" onClick={handleResult}>
            <i>=</i>
          </button>
          <button className="num equal clear" onClick={handleClear}>
            <i>AC</i>
          </button>
        </form>
      </div>
    </div>
  );
}

