import React from "react";

const Opinion = () => {
  return (
    <article className="opinion">
      <div className="username">
        <img
          src="https://e7.pngegg.com/pngimages/279/812/png-clipart-cute-poodle-animal-puppy.png"
          alt="foto de usuario"
        />
        <h3>Jafet de la Cruz</h3>
      </div>
      <p className="opinion-text">
        Es una excelente macbook, bastante rápida (aunque no tanto como uno
        esperaría de una mac, pero es entendible dado que es el modelo air) y
        confiable, con una duración decente a la batería y una hermosa pantalla
        delgada. . Perfecta para ofimática y trabajos estudiantiles ligeros,
        pero no recomendable para estudiantes de carreras universitarias que
        necesiten potencia y versatilidad, en ese caso estaría mejor una laptop
        o una de escritorio por el mismo precio.
      </p>
    </article>
  );
};

export default Opinion;
