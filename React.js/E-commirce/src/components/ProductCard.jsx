import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} width="150" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
};

export default ProductCard;
