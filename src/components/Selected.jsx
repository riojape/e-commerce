import React, { useContext } from "react";
import "../css/Selected.css";
import macbook1 from "../assets/macbook1.png";
import { EcommerceContext } from "../context/EcommerceProvider";
import useCount from "../hooks/useCount";

const Selected = ({ product }) => {
  const { count, decrement, increment } = useCount();
  console.log(count);

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
        <p className="sign" onClick={decrement}>
          -
        </p>
        <p>{count}</p>
        <p className="sign" onClick={increment}>
          +
        </p>
      </div>
    </div>
  );
};

export default Selected;
