import React, { useEffect } from "react";
import "../Style/About.scss";
import Aos from "aos";
import 'aos/dist/aos.css'; 

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1 data-aos="fade-up">
          A TITLE <br />
          COMES HERE
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Suspendisse mauris eros, iaculis placerat purus sed,
          <br /> euismod luctus quam. Curabitur quis bibendum augue.
          <br /> Nam convallis blandit sapien in molestie.
        </p>
        <div className="box" data-aos="fade-up" >
          <img
            src="https://i.pinimg.com/originals/71/86/04/718604e669d5a650f361774bcde04de9.jpg"
            alt=""
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
