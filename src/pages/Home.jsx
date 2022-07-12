import React from "react";
import ProductCard from "../components/ProductCard";
import OffersDay from "../containers/OffersDay";

const Home = () => {
  return (
    <div className="home">
      <OffersDay>
        <ProductCard />
      </OffersDay>
    </div>
  );
};

export default Home;
