import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Developer", "Content Creater"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assetsOne/me.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shabana Kauser</h1>
          <h3>
            I am a... <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assetsOne/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
