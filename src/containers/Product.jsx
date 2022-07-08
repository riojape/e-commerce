import React from "react";
import Features from "../components/Features";
import Opinion from "../components/Opinion";
import ProductInfo from "../components/ProductInfo";
import "../css/Product.css";

const Product = () => {
  return (
    <div className="product">
      <h2 className="title">MacBook Air</h2>
      <p className="results">654 resultados</p>
      <ProductInfo></ProductInfo>
      <Features></Features>
      <section className="opinions">
        <h3 className="opinions-title">
          Opiniones sobre Apple MacBook Air A2337
        </h3>
        <Opinion></Opinion>
        <Opinion></Opinion>
      </section>
    </div>
  );
};

export default Product;
