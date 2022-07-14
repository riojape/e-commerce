import React, { useContext } from "react";
import Pay from "../components/Pay";
import Selected from "../components/Selected";
import { EcommerceContext } from "../context/EcommerceProvider";
import "../css/Shopping.css";

const Shopping = () => {
  const { selecteds } = useContext(EcommerceContext);
  // console.log(selecteds);
  return (
    <div className="shopping">
      <h2 className="title">Carrito de compras</h2>
      <div className="shopping-content">
        <div className="shopping-selected">
          {selecteds.map((product) => (
            <Selected product={product} key={`select-${product.id}`} />
          ))}
        </div>
        <div className="shopping-pay">
          <Pay></Pay>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
