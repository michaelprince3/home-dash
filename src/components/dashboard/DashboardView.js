import React, { useState, useEffect } from "react";
import BackVideo from "/home/michaelprince3/workspace/react/home-dash/src/components/video/videoplayback.mp4"
import "./DashboardView.css";

const DashboardView = (props) => {
  const [weather, setWeather] = useState([]);

  return (
    <>
      <div className="backVideo">
        <video autoPlay loop muted>
          <source src={BackVideo} type="video/mp4"/>
        </video>
      </div>
      <div className="cardContainer">
        <div className="weatherCard">
          <div className="cardContent">
            <h1>Weather</h1>

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardView;
