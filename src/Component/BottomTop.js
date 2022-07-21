import React, { useEffect } from "react";
import "../Style/BottomTop.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function BottomTop() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bottomTop">
      <div   className="bottomLeft">
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
          quam. Curabitur quis bibendum augue. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse mauris eros, iaculis placerat
          purus sed, euismod luctus quam. Curabitur quis bibendum augue.
        </p>
      </div>
      <div data-aos="fade-up" className="bottomRight"></div>
    </div>
  );
}

export default BottomTop;
