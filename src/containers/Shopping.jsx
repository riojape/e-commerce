import React from "react";
import Pay from "../components/Pay";
import Selected from "../components/Selected";
import "../css/Shopping.css";

const Shopping = () => {
  return (
    <div className="shopping">
      <h2 className="title">Carrito de compras</h2>
      <div className="shopping-content">
        <div className="shopping-selected">
          <Selected></Selected>
        </div>
        <div className="shopping-pay">
          <Pay></Pay>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
