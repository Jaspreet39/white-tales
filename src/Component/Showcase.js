import React, { useEffect } from "react";
import "../Style/showcase.scss";
import gsap from "gsap";
import { useState } from "react";

function Showcase() {
  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    console.log("value of e is", window.pageYOffset);
    //  setScroll(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const y = (window.pageYOffset / 3)/2;
      const y2 = (window.pageYOffset / 3)/2;
      gsap.to('.showcaseLowerRightsecondImage',{bottom:y2*2.6-225, x:0, duration:1})
      gsap.to('.secondImg', { top: -y + 100, x: 0, duration: 1 })
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        gsap.to('.upperTitle, .lowerTitle',{display:'flex', y:0, dela:0})
      } else {
        gsap.to('.upperTitle, .lowerTitle', { display: 'none', y: 0, dela: 0 })
      }
    });

    return () => window.removeEventListener("scroll", () => {
      if (window.scrollY > 500) {
        gsap.to('.upperTitle', { display: 'flex', y: 0, dela: 0 })
      } else {
        gsap.to('.upperTitle', { display: 'none', y: 0, dela: 0 })
      }
    });

  }, [])

  return (
    <div className="showcase" id="scrollDemo">
      <div className="showcaseUpper">
        <div className="showcaseImage">
          <div className="firstImg">
            <img
              src="https://i.pinimg.com/736x/bf/3c/b7/bf3cb7caebd74e54b5e04869870d94bd--gold-jewellery-jewellery-designs.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="secondImg">
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18758374/2022/6/17/0abe0534-52a9-4cd5-9328-3bf44d7dfb871655452031998NecklaceandChains1.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        </div>
       
        <div className="showcaseUpperTitle">
          <h1 className="upperTitle">
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
          <h1 className="lowerTitle">
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
          <div className="showcaseLowerRightfirstImg">
            <img
              src="https://i.pinimg.com/736x/bf/3c/b7/bf3cb7caebd74e54b5e04869870d94bd--gold-jewellery-jewellery-designs.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="showcaseLowerRightsecondImage">
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
