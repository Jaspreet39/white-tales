import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import "../Style/Header.scss"
import Banner from "./Banner";
import Video from '../assets/Video/bannerVideo.mp4'

function Header() {

  let app = useRef(null)

  const [scroll, setScroll] = useState();
  useEffect(() => {
    // gsap.to(".header", { position:'Sticky', x: 0, duration: 5, delay: 0.5 });
    // gsap.to(".image ", { borderRadius:15, x: 0, duration:1, delay: 0.5 });
    // gsap.to(".bannerImg", { height:'90vh',width:'96%',marginLeft:'2%', x: 0, duration: 1, delay: 0.5 });
  }, [])
  return (
   <div className="headerMain">
      <div className="header">
        <div className="first"></div>
        <h1>WHITE TALES</h1>
        <a href="#form">
          <p>Book an Appointment</p>
        </a>
      </div>
      <div className="banner" >
        <div className="bannerImg" ref={(e) => (app = e)}>
          <video height="100%" width="100%" autoplay='autoplay' loop muted='true' playsinline>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
   </div>
  );
}

export default Header;
