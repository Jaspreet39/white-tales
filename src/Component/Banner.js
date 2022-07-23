import React, { useEffect, useRef, useState } from "react";
import "../Style/banner.scss";
import gsap from "gsap";
import video from '../assets/Video/bannerVideo.mp4'

function Banner() {
  let app = useRef(null);

  const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     const y = (window.pageYOffset / 3 - 50) / 12;
  //     gsap.to(".bannerImg", { scale: y , x: 10, duration: 1 });
  //   });
  // }, []);


  useEffect(() => {
    setScroll(true)
    gsap.to(".banner", { margin: "0 2%", x: 0, duration: 1, delay: 0.5 });
  }, []);
  return (
    <div className="banner">
      <div className="bannerImg" ref={(e) => (app = e)}>
        <video height="100%" width="100%" autoplay='autoplay' loop muted='true' playsinline>
          <source src='https://youtu.be/Ntb7Uw0JDto' type="video/mp4" />
        </video>
      </div>
      {scroll ? (
        <div className="bannerImg" dangerouslySetInnerHTML={{
          __html: `<video autoPlay ='autoplay' loop muted='true' playsinline><source
        src=${video}
      source></video>` }}></div>
      ) : (
        <h1>no video</h1>
      )}
    </div>
  );
}

export default Banner;
