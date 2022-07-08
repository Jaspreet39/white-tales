import React from "react";
import "../Style/carousel.scss";

function Carouselimage() {
  return (
    <div className="carousel">
      <h1>CATEGORIES</h1>
      <div className="carouselContainer">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="images">
            {/* <img
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXJ8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              height="100%"
              width="100%"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carouselimage;
