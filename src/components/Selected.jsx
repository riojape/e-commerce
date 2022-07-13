import React from "react";
import "../css/Selected.css";
import macbook1 from "../assets/macbook1.png";

const Selected = ({ product }) => {
  return (
    <div className="selected">
      <img src={macbook1} alt="image" />
      <div className="description">
        <p>
          {product.brand} {product.name}
        </p>
        <p>${product.precio}</p>
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
