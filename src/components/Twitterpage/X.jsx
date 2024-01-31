import React from "react";
import "./X.css";


const X = () => {
  return (
    <div className="card">
      <div className="title">Twitter Video Downloader</div>
      <div className="button-container">
        <button className="button">Download Video</button>
        <button className="button">Download Audio</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Paste video link here...."
          className="search-bar"
        />
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default X;
