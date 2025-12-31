import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
