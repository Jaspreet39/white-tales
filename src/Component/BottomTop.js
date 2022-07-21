import React, { useEffect } from "react";
import "../Style/BottomTop.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import box from '../assets/images/Rectangle45.png'

function BottomTop() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bottomTop">
      <div className="bottomLeft">
        <h1>
          ABOUT
          <br />
          WHITE TALES
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mauris eros, iaculis placerat purus sed, euismod luctus quam.
          Curabitur quis bibendum augue. Nam convallis blandit sapien in
          molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse mauris eros, iaculis placerat purus sed, euismod luctus
          quam. Curabitur quis bibendum augue. Nam convallis blandit sapien in
          molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse mauris eros, iaculis placerat purus sed, euismod luctus
          quam. Curabitur quis bibendum augue. Nam convallis blandit sapien in
          molestie.
        </p>
      </div>
      <div data-aos="fade-up" className="bottomRight">
        <img src={box} alt="" height='100%' width="100%"/>
      </div>
    </div>
  );
}

export default BottomTop;
