import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../css/OffersDay.css";

const OffersDay = () => {
  return (
    <div className="offers-day">
      <br />
      <h2 className="title">Ofertas del día</h2>
      <br />
      <div className="offers-list">
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
        <ProductInfo></ProductInfo>
      </div>
    </div>
  );
};

export default OffersDay;
