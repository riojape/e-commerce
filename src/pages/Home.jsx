import React, { useContext } from "react";
import ProductInfo from "../components/ProductInfo";
import OffersDay from "../containers/OffersDay";
import { EcommerceContext } from "../context/EcommerceProvider";

const Home = () => {
  const { products } = useContext(EcommerceContext);
  return (
    <div className="home">
      <OffersDay>
        {products.map((product) => (
          <ProductInfo product={product} />
        ))}
      </OffersDay>
    </div>
  );
};

export default Home;
