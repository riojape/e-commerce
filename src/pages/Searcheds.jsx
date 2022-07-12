import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductInfo from "../components/ProductInfo";
import "../css/Product.css";

const Searcheds = ({ searchedProducts }) => {
  console.log(searchedProducts.length);
  return (
    <div className="searcheds">
      <h2 className="title">MacBook Air</h2>
      <p className="results">654 resultados</p>
      <section className="list">
        {searchedProducts.map((product) => (
          <ProductInfo product={product} />
        ))}
      </section>
    </div>
  );
};

export default Searcheds;
