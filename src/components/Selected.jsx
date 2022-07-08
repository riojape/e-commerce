import React from "react";
import "../css/Selected.css";
import macbook1 from "../assets/macbook1.png";

const Selected = () => {
  return (
    <div className="selected">
      <img src={macbook1} alt="image" />
      <div className="description">
        <p>Apple Macbook...</p>
        <p>$25,00.00</p>
      </div>
      <div className="counter">
        <p className="sign">-</p>
        <p>1</p>
        <p className="sign">+</p>
      </div>
    </div>
  );
};

export default Selected;
