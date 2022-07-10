import React from "react";
import "../Style/carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carouselimage() {
  const width = window.innerWidth;
  const images = [
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18758374/2022/6/17/0abe0534-52a9-4cd5-9328-3bf44d7dfb871655452031998NecklaceandChains1.jpg",
    },
    {
      img: "https://rukminim1.flixcart.com/image/332/398/l2jcccw0/jewellery-set/x/t/j/cultured-d-je-sf-mino-15-prop-single-golden-ball-1d-brado-original-imagduvfj9vxjube.jpeg?q=50",
    },
    {
      img: "https://static-01.daraz.pk/p/dd7e5233f331020650e5375bd2c23c60.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGjvP-ZK6X9KfRruDpV6G0X962OlaRC0Q8w&usqp=CAU",
    },
    {
      img: "https://cdn.w600.comps.canstockphoto.com/jewellery-stock-image_csp5606586.jpg",
    },
    {
      img: "https://princejewellery.com/themes/pjewellery/assets/img/header/collection-nav.jpg",
    },
    {
      img: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BENS0721D28_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-52826.png",
    },
    {
      img: "https://5.imimg.com/data5/BW/QC/MY-34992703/designer-necklace-sets-500x500.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 500 ? 3 : 1,
    slidesToScroll: width > 500 ? 3 : 1,
  };

  console.log(width, "width");
  return (
    <div className="carousel">
      <h1>Categories</h1>
      <Slider {...settings}>
        {images.map((item) => (
          <div className="images">
            <img
              src={item.img}
              alt=""
              height="100%"
              width="100%"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carouselimage;
