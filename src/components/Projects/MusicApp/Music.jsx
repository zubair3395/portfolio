import React, { useRef, useState } from "react";
import { songs } from "../../../constants/songs";
import background from "../../../assests/images/background.jpeg";
import "../../../style/music.css";
const Music = () => {
  const myAudio = useRef();
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isPlaying, setisPlaying] = useState(false); 
  const handleNextSong = () => {
    if (currentIndex >= songs?.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePreviousSong = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handlePlay = () => {
    if (isPlaying) {
      myAudio.current.pause();
      setisPlaying(false);
    } else {
      myAudio.current.play();
      setisPlaying(true);
    }
  };
  const handleIncreaseVolume = () => {
    myAudio.current.volume += 0.1;
  };
  const handleDecreaseVolume = () => {
    myAudio.current.volume -= 0.1;
  };

  return (
    <>
      <main className="player">
        <div className="header">
          <a href="#" className="button">
            <i className="fas fa-bars" aria-hidden="true"></i>
            <span className="sr-only">menu bar</span>
          </a>
          <p>Now Playing</p>
          <a href="#" className="button">
            <i className="fas fa-search" aria-hidden="true"></i>
            <span className="sr-only">Search</span>
          </a>
        </div>
        <img src={background} alt="album art" className="art" />
        <div className="info">
          <h1>{songs[currentIndex].title.slice(0, 12)}</h1>
          <p>Singer name</p>
        </div>
        <div className="prog">
          <div className="prog-time">
            <button
              type="button"
              onClick={handleDecreaseVolume}
              className="left"
            >
              <i
                class="fa fa-volume-down"
                style={{ fontSize: "30px", color: "black" }}
              ></i>
            </button>
            <button
              type="button"
              onClick={handleIncreaseVolume}
              className="right"
            >
              <i
                class="fa fa-volume-up"
                style={{ fontSize: "30px", color: "black" }}
              ></i>
            </button>
          </div>
          <audio
            style={{ width: "80%", marginLeft:"20px" }}
            src={songs[currentIndex].src}
            controls
            ref={myAudio}
          ></audio>
        </div>

        <ul className="buttons">
          <a href="#" className="button button-sm">
            <i className="fas fa-random fa-sm" aria-hidden="true"></i>
            <span className="sr-only">Shuffle</span>
          </a>
          <button onClick={handlePreviousSong} className="button button-md">
            <i className="fas fa-step-backward" aria-hidden="true"></i>
            <span className="sr-only">Previous Music</span>
          </button>
          <button className="button button-lg" onClick={handlePlay}>
            <i className="fas fa-pause fa-lg" aria-hidden="true"></i>
            <button className="sr-only">Pause</button>
          </button>
          <button className="button button-md" onClick={handleNextSong}>
            <i className="fas fa-step-forward"></i>
            <span className="sr-only">Next Music</span>
          </button>
          <button className="button button-sm">
            <i className="fas fa-step-forward fa-sm" aria-hidden="true"></i>
            <span className="sr-only">Forward</span>
          </button>
        </ul>
        <div className="bar"></div>
      </main>
    </>
  );
};

export default Music;
