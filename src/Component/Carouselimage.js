import React, { useEffect } from "react";
import "../Style/carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Aos from "aos";
import 'aos/dist/aos.css'; 
import img1 from '../assets/images/Rectangle12.png'
import img2 from '../assets/images/Rectangle12(1).png'
import img3 from '../assets/images/Rectangle12(2).png'
import img4 from '../assets/images/Rectangle12(3).png'

function Carouselimage() {
  const width = window.innerWidth;
  console.log(width, "width");
  const images = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  console.log(width, "width");

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div  className="carousel">
      <h1>CATOGORIES</h1>
      <div className="carouselContainer">
        <Splide
          style={{ marginRight: "20px", marginLeft: "20px" }}
          onScroll={(item) => {
            console.log(item, "scroll");
          }}
          options={{
            arrows:width < 500 ? false : true,
            perPage: width < 500 ? 2: 4,
            rewind: true,
            width: "100%",
            gap: width < 500 ? "6rem" : "2rem",
          }}
        >
          {images.map((item) => (
            <SplideSlide style={{ width: "100%" }}>
              <div data-aos="fade-up" data-aos-delay={images.indexOf(item)*1000}  className="images">
                <img onClick={() => console.log(images.indexOf(item), 'value')} src={item.img} alt="" height="100%" width="100%" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Carouselimage;
