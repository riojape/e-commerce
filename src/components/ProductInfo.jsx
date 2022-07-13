import "../css/ProductInfo.css";
import macbook1 from "../assets/macbook1.png";
import { Link } from "react-router-dom";

const ProductInfo = ({ product, count, setCount, selecteds, setSelecteds }) => {
  const handleClick = () => {
    setCount(count + 1);
    setSelecteds([...selecteds, product]);
  };

  return (
    <article className="productInfo">
      <img className="productInfo-image" src={macbook1} />
      <div className="productInfo-description">
        <Link to={`/products/${product.id}`} className="productInfo-title">
          <h2>
            {product.brand} {product.name} ({product.screen} pulgadas,{" "}
            {product.year}, Chip {product.chip}, {product.ssd} de SSD,{" "}
            {product.ram} de RAM) - {product.color}
          </h2>
        </Link>
        <div class="price">
          <p>${product.precio}</p>
          <p>$25,999</p>
        </div>
        <p>{product.description}</p>
      </div>
      <div class="buttons">
        <button class="btn btn-primary">Comprar ahora</button>
        <button class="btn btn-secondary" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default ProductInfo;
