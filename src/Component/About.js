import React from "react";
import "../Style/About.scss";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1>
          A TITLE <br />
          COMES HERE
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Suspendisse mauris eros, iaculis placerat purus sed,
          <br /> euismod luctus quam. Curabitur quis bibendum augue.
          <br /> Nam convallis blandit sapien in molestie.
        </p>
        {/* <div className="box" /> */}
      </div>
    </div>
  );
}

export default About;
