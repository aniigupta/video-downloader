import React, { useState } from "react";

const VideoComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("1080p");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQualityChange = (event) => {
    setSelectedQuality(event.target.value);
  };

  const handleSearchDownload = () => {
    // Implement search download logic here
    console.log("Search and download:", searchTerm);
  };

  const handleQualityDownload = () => {
    // Implement quality download logic here
    console.log("Download in", selectedQuality);
  };

  return (
    <div className="video-component">
      {/* Search Bar with Download Button */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchDownload}>Download</button>
      </div>

      {/* Video Thumbnail with Video Name */}
      <div className="video-thumbnail">
        <img src="video-thumbnail-url.jpg" alt="Video Thumbnail" />
        <p>Video Name</p>
      </div>

      {/* Quality Dropdown with Download Button */}
      <div className="quality-dropdown">
        <select value={selectedQuality} onChange={handleQualityChange}>
          <option value="240p">240p</option>
          <option value="360p">360p</option>
          <option value="480p">480p</option>
          <option value="720p">720p</option>
          <option value="1080p">1080p</option>
        </select>
        <button onClick={handleQualityDownload}>Download</button>
      </div>
    </div>
  );
};

export default VideoComponent;
