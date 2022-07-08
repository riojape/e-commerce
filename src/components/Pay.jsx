import React from "react";
import "../css/Pay.css";

const Pay = () => {
  return (
    <section className="pay">
      <div className="pay-total">
        <p>Total:</p>
        <p>$25,400.00</p>
      </div>
      <div className="personal-information">
        <h3>Datos Personales</h3>
        <div>
          <input className="pay-input" type="text" placeholder=" Nombre" />
          <input className="pay-input" type="text" placeholder=" Apellido" />
        </div>
        <input
          className="pay-input input-large"
          type="text"
          placeholder=" Correo electronico"
        />
      </div>
      <div className="personal-information">
        <h3>Metodo de pago</h3>
        <input
          className="pay-input input-large"
          type="text"
          placeholder=" Numero de tarjeta"
        />
        <div>
          <input className="pay-input" type="text" placeholder=" MM/AA" />
          <input className="pay-input" type="text" placeholder=" CVC" />
        </div>
      </div>
      <button className="btn btn-primary pay-button">Pagar ahora</button>
    </section>
  );
};

export default Pay;
