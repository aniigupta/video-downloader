import React from "react";
import "./op.css";

import Y from "../Assets/youtube.png";
import I from "../Assets/insta.png";
import X from "../Assets/x.png";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <div className="image-box">
        <img src={Y} alt="YOUTUBE" />
      </div>
      <div className="image-box">
        <img src={I} alt="INSTAGRAM" />
      </div>
      <div className="image-box">
        <img src={X} alt="TWITTER" />
      </div>
    </div>
  );
};
export default ImageContainer;
