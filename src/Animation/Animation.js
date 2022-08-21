import React from "react";
import "./Animation.css";
import logo from "./logo.svg";

const Animation = () => {
  return (
    <>
      <div id="anime" className="body-i">
        <div id="ani">
          <div className="anime-2">
            <img
              src={logo}
              alt="not found"
              className="logo-new"
              style={{ "document.style.opacity": "0" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
