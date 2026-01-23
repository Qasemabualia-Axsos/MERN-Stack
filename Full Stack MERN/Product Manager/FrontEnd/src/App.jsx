import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = async (product) => {
    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });

      if (!res.ok) throw new Error("Failed to create product");

      const savedProduct = await res.json();

      // Optionally, update frontend state if you want to display products in React
      setProducts([...products, savedProduct]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Form onCreate={addProduct} />
      <h2>Products (Frontend View)</h2>
      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid gray", margin: 5, padding: 10 }}>
          <h3>{p.title}</h3>
          <p>Price: ${p.price}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
