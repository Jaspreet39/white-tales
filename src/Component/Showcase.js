import React from "react";
import "../Style/showcase.scss";
import logo3 from "../assets/images/logo_small3.png";

function Showcase() {
  return (
    <div className="showcase">
      <div className="showcaseUpper">
        <div className="showcaseUpperImages">
          <div className="showcaseImage">
            <div className="firstImg"></div>
            {/* <div className="secondImg"></div> */}
          </div>
        </div>
        <div className="showcaseUpperTitle">
          <h1>
            A CATCHY TITLE COMES
            <br />
            HERE IN 2 LINES
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            <br /> mauris eros, iaculis placerat purus sed, euismod luctus quam.
          </p>
        </div>
      </div>
      {/* lower */}

      <div className="showcaseLower">
        <div className="showcaseLowerLeft">
          <h1>
            A CATCHY TITLE COMES
            <br />
            HERE IN 2 LINES
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            <br /> mauris eros, iaculis placerat purus sed, euismod luctus quam.
          </p>
        </div>
        <div className="showcaseLowerRight">
          <div className="firstImg"></div>
          <div className="secondImage"></div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
