import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProduct] = useState([]);
  console.log(products);
  const [cart, setCart] = useState([]);
  const addToCart = (cartData) => {
    const newCart = [...cart, cartData];
    setCart(newCart);
    console.log(newCart);
    // console.log(newCart);
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="products">
      <div className="product">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="main-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Products;
