import React from "react";
import { data } from "../data";

const Features = () => {
  const product = data[0];
  return (
    <section className="features">
      <h3 className="features-title">
        Características de {product.brand} {product.name} {product.serie}
      </h3>
      <div className="features-contents">
        <div>
          <p>Memoria RAM: {product.ram}</p>
          <p>Tipo de resolución: {product.resolution}</p>
        </div>
        <div>
          <p>Tamaño de la pantalla: {product.screen}"</p>
          <p>Duración de la batería: {product.battery}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
