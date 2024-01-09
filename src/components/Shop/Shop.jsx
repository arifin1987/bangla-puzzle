import { useEffect } from "react";
import { useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container">
      <div>
        <h1 className="text-4xl font-bold text-center ">Products </h1>
        <div className="md: grid grid-cols-3 gap-2 ">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Products>
          ))}
        </div>
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
