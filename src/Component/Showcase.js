import React, { useEffect } from "react";
import "../Style/showcase.scss";
import gsap from "gsap";
import { useState } from "react";
import img1 from '../assets/images/FirstImage.png'
import img2 from '../assets/images/secondImage.png'
import img3 from '../assets/images/ThirdImage.png'
import img4 from '../assets/images/FourthImage.png'

function Showcase() {
  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    console.log("value of e is", window.pageYOffset);
    //  setScroll(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const y = (window.pageYOffset / 3)/2;
      console.log(window.innerHeight,'height')
      console.log(y,'yyyy')
      const y2 = (window.pageYOffset / 3)/2;
      gsap.to('.showcaseLowerRightsecondImage',{bottom:y2*2.6-225, x:0, duration:1})
      gsap.to('.secondImg', { top: -y + 100, x: 0, duration: 1 })
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 500) {
  //       gsap.to('.upperTitle, .lowerTitle',{display:'flex', y:0, dela:0})
  //     } else {
  //       gsap.to('.upperTitle, .lowerTitle', { display: 'none', y: 0, dela: 0 })
  //     }
  //   });

  //   return () => window.removeEventListener("scroll", () => {
  //     if (window.scrollY > 500) {
  //       gsap.to('.upperTitle', { display: 'flex', y: 0, dela: 0 })
  //     } else {
  //       gsap.to('.upperTitle', { display: 'none', y: 0, dela: 0 })
  //     }
  //   });

  // }, [])

  return (
    <div className="showcase" id="scrollDemo">
      <div className="showcaseUpper">
        <div className="showcaseImage">
          <div className="firstImg">
            <img
              src={img2}
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="secondImg">
            <img
              src={img1}
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
        <div className="lower">
          <div className="showcaseLowerRight">
            <div className="showcaseLowerRightfirstImg">
              <img
                src={img4}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
            <div className="showcaseLowerRightsecondImage">
              <img
                src={img3}
                alt=""
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
