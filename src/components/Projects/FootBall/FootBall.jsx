import React, { useEffect, useState } from "react";
import ball from "../../../assests/images/ball.jpg";
import player from "../../../assests/images/player.jpeg"
const FootBall = () => {
  const [ballPostion, setBallPostion] = useState({
    ballPostionX: 100,
    ballPostionY: 200,
  });
  const [playerPostion, setPlayerPostion] = useState({
    playerPostionX: 0,
    playerPostionY: 0,
  });
  const [score, setScore] = useState(0);
  const [ballSpeed, setBallSpeed] = useState(2000);
  useEffect(() => {
    
      setInterval(() => {
        let temX = Math.floor(Math.random() * 1000);

        let temY = Math.floor(Math.random() * 300);

        setBallPostion({ ballPostionX: temX, ballPostionY: temY });
      }, ballSpeed);
  }, []);

  useEffect(()=>{
      let tempTime =  ballSpeed- (score*50)
      if(tempTime>800){
        setBallSpeed(tempTime);
      }
    
      console.log("Ball Speed: ", ballSpeed)
  }, [score])
  
  window.addEventListener("mousemove", function (e) {
    if (e.x < 1000) {
      setPlayerPostion({ playerPostionX: e.x, playerPostionY: e.y });
    }
  });
  const handleScore = async () => {
    let s = score + 1;
    setScore(s);
  };
    return (
      <div>
        <h1 className="text-center">Foot Ball Game- Score {score}</h1>
        <div
          className="mt-5"
          style={{
            position: "relative",
            border: "1px solid green",
            margin: "auto",
            width: "80%",
            height: "450px",
            borderBottom: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: ballPostion.ballPostionY,
              left: ballPostion.ballPostionX,
              border: "none",
            }}
          >
            <img
              onClick={handleScore}
              style={{ width: "100px", height: "100px" }}
              src={ball}
              alt="Ball"
            />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            border: "1px solid green",
            margin: "auto",
            width: "80%",
            height: "100px",
            borderTop: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: playerPostion.playerPostionX,
            }}
            direction="right"
          >
            <img
              style={{ width: "100px", height: "100px" }}
              src={player}
              alt="player"
            />
          </div>
        </div>
      </div>
    );
};

export default FootBall;
