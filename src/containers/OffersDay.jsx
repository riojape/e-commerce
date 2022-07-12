import React from "react";
import ProductCard from "../components/ProductCard";
import "../css/OffersDay.css";

const OffersDay = (props) => {
  return (
    <div className="offers-day">
      <br />
      <h2 className="title">Ofertas del día</h2>
      <br />
      <div className="offers-list">{props.children}</div>
    </div>
  );
};

export default OffersDay;
