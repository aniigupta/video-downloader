import React from "react";
import "./op.css";

import Y from "../Assets/youtube.png";
import I from "../Assets/insta.png";
import X from "../Assets/x.png";

const ImageContainer = () => {
  return (
    <div className="image-container">
      <button href={""} className="image-box">
        <img src={Y} alt="YOUTUBE" />
      </button>
      <button  href={"./Instagrampage"}className="image-box">
        <img src={I} alt="INSTAGRAM" />
      </button>
      <button href={"./Twitterpage"} className="image-box">
        <img src={X} alt="TWITTER" />
      </button>
    </div>
  );
};
export default ImageContainer;
