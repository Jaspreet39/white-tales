
import React, { useEffect, useRef, useState } from "react";
import "../Style/banner.scss";
import gsap from "gsap";

function Banner() {
  let app = useRef(null)

  const [scroll, setScroll] = useState();

  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     const y = (window.pageYOffset / 3 - 50) / 12;
  //     gsap.to(".bannerImg", { scale: y , x: 10, duration: 1 });
  //   });
  // }, []);

  useEffect(()=>{
    gsap.to(".banner", { margin:'0 2%', x: 0, duration: 1,delay:0.5});
  },[])
  return (
      <div className="banner" >
      <div className="bannerImg" ref={e => app = e}>
              <img
                src="https://images.indianexpress.com/2021/05/gold-jewellery_1200-Copy.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
      </div>
  );
}

export default Banner;
