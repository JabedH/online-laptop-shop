import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProduct] = useState([]);
  console.log(products);
  const [cart, setCart] = useState([]);
  const [ran, setRen] = useState([]);

  console.log(ran);
  // random product
  const getRandom = (cart) => {
    const rand = cart[(Math.random() * cart.length) | 0];
    // const rand = Math.floor(Math.random() * cart.length);
    setRen(rand);
  };
  // remove all

  // cart data
  const addToCart = (cartData) => {
    const newCart = [...cart, cartData];
    if (cart.length > 3) {
      alert("Your cart is full");
    } else {
      setCart(newCart);
    }

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
        <Cart
          setCart={setCart}
          getRandom={getRandom}
          // removeItem={removeItem}
          ran={ran}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default Products;
