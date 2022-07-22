import React, { useEffect } from "react";
import "../Style/About.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import box from "../assets/images/Rectangle42.png";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      {/* <div className="aboutContainer">
        <h1 data-aos="fade-up">
          Inspired from the <br />
          Nature.
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mauris eros, iaculis placerat purus sed, euismod luctus quam.
          Curabitur quis bibendum augue. Nam convallis blandit sapien in
          molestie.
        </p>
        <div className="box" data-aos="fade-up">
          <img src={box} alt="" height="100%" width="100%" />
        </div>
      </div> */}
      <div className="firstBackBox"></div>
      <div className="secondBackBox"></div>
      <div className="aboutContainer">
        <h1 data-aos="fade-up">
          Inspired from the <br />
          Nature.
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mauris eros, iaculis placerat purus sed, euismod luctus quam.
          Curabitur quis bibendum augue. Nam convallis blandit sapien in
          molestie.
        </p>
      </div>
      <div className="box" data-aos="fade-up">
        <img src={box} alt="" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default About;
