import React, { useEffect, useRef, useState } from "react";
import "../Style/banner.scss";
import gsap from "gsap";

function Banner() {
  let app = useRef(null);

  const [scroll, setScroll] = useState();

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     const y = (window.pageYOffset / 3 - 50) / 12;
  //     gsap.to(".bannerImg", { scale: y , x: 10, duration: 1 });
  //   });
  // }, []);

  useEffect(() => {
    gsap.to(".banner", { margin: "0 2%", x: 0, duration: 1, delay: 0.5 });
  }, []);
  return (
    <div className="banner">
      {/* <div className="bannerImg" ref={(e) => (app = e)}>
        <video height="100%" width="100%" autoPlay>
          <source src="../assets/Video/T1HAILEY05_PaveTripleBracelet_RC06_H264_CONFORM_CLEAN_No-SOUND.mp4" type="video/mp4" />
        </video>
      </div> */}
      <div className="bannerImg" dangerouslysetinnerhtml={{ __html: `<video autoplay><source
        src="../assets/Video/T1HAILEY05_PaveTripleBracelet_RC06_H264_CONFORM_CLEAN_No-SOUND.mp4" type="video/mp4"
      source></video>` }} ></div>
    </div>
  );
}

export default Banner;
