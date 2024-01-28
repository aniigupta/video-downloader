import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Video Downloader</div>
      <div className="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">How to Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
