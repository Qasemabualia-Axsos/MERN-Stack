import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Shop</Link> | 
      <Link to="/cart"> Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;
