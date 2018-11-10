import React from "react";
import cloud from "./../gfx/cloud.svg";

const Upload = ({ onChange, filename }) => {
  return (
    <div className="file has-name">
      <label className="file-label">
        <input
          onChange={onChange}
          id="fileInput"
          className="file-input"
          type="file"
          name="resume"
        />
        <span className="file-cta">
          <span className="file-icon">
            <img src={cloud} />
          </span>
          <span className="file-label">Choose a file…</span>
        </span>
        <span className="file-name">{filename}</span>
      </label>
    </div>
  );
};

export default Upload;
