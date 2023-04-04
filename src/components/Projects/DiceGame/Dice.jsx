import React from "react";
import { useState } from "react";
const Dice = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [total, setTotal] = useState(0);

  const handleScroll = () => {
    let tempdice1 = Math.floor(Math.random() * 6);
    let tempdice2 = Math.floor(Math.random() * 6);
    if (tempdice1 > 0 && tempdice2 > 0) {
      setDice1(tempdice1);
      setDice2(tempdice2);
      setTotal(tempdice1 + tempdice2);
    }
  };

  return (
    <div
    className="shadow-lg rounded-5"
      style={{
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        width: "500px",
        margin: "50px auto"
      }}
    >
      <h1>Dice Game</h1>
      <div className="mt-5">
        <i
          class={`mx-5 bi bi-dice-${dice1}`}
          style={{ color: "yellow", fontSize: "100px" }}
        ></i>
        <i
          class={`mx-5 bi bi-dice-${dice2}`}
          style={{ color: "green", fontSize: "100px" }}
        ></i>
      </div>
      <h1 className="my-5">Score: {total}</h1>
      <button className="btn btn-success mt-5" onClick={handleScroll}>
        Dice Roll
      </button>
    </div>
  );
};

export default Dice;
