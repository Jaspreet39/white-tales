import React from "react";
import "../Style/Header.scss"

function Header() {
  return (
    <div className="header">
      <div className="first"></div>
      <h1>WHITE TALES</h1>
      <a href="#form">
        <p>Book an Appointment</p>
      </a>
    </div>
  );
}

export default Header;
