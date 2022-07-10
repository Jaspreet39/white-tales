import React from "react";
import "../Style/showcase.scss";
import logo3 from "../assets/images/logo_small3.png";

function Showcase() {
  return (
    <div className="showcase">
      <div className="showcaseUpper">
        <div className="showcaseUpperImages">
          <div className="showcaseImage">
            <div className="firstImg">
              <img
                src="https://i.pinimg.com/originals/71/86/04/718604e669d5a650f361774bcde04de9.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </div>
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
          <div className="firstImg">
            <img
              src="https://i.pinimg.com/736x/bf/3c/b7/bf3cb7caebd74e54b5e04869870d94bd--gold-jewellery-jewellery-designs.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="secondImage">
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18758374/2022/6/17/0abe0534-52a9-4cd5-9328-3bf44d7dfb871655452031998NecklaceandChains1.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
