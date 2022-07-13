import React, { useContext, useEffect } from "react";
import ProductInfo from "../components/ProductInfo";
import { EcommerceContext } from "../context/EcommerceProvider";
import "../css/Product.css";

const Searcheds = () => {
  const { searchedProducts } = useContext(EcommerceContext);
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
