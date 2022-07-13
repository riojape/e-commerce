import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Features from "../components/Features";
import Opinion from "../components/Opinion";
import ProductInfo from "../components/ProductInfo";
import { EcommerceContext } from "../context/EcommerceProvider";
import "../css/Product.css";

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(EcommerceContext);
  let product = products.filter((product) => {
    return product.id === id;
  })[0];
  // console.log(product);

  return (
    <div className="product">
      <h2 className="title">MacBook Air</h2>
      <p className="results">654 resultados</p>
      <ProductInfo id={id} product={product}></ProductInfo>
      <Features product={product}></Features>
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
