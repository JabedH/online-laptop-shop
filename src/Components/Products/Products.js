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
    if (rand.length === 0) {
      return;
    } else {
      setRen(rand);
    }
  };
  // remove all

  // cart data
  const addToCart = (cartData) => {
    const newCart = [...cart, cartData];
    console.log(cart);
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
    <div>
      <div className="products">
        <div className="product">
          {products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

          <div className="questions">
            <h3>How does react works</h3>
            <p>
              React is a JavaScript library. That creates(UI) in a predictable
              and efficient. Before Our traditional DOM was very slow for this
              reason a team of facebook created react app and make it faster.
              react work with a virtual DOM that is basically a DOM tree
              representation in JavaScript. So when it needs to write or read to
              the DOM that will use the virtual representation of it. when there
              is needs any update in the virtual DOM react compares the virtual
              DOM with a snapshot of the virtual before the update. With the
              help of this comparison React figures out which components in the
              UI needs to be updated.
            </p>
          </div>

          <div className="questions">
            <h3>How useState() work?</h3>
            <p>
              useState() is a function that allows having state variables in
              functional components. we can pass the initial state to this
              function and it returns a variable with the current state value
              and another function to update this value. If we want to use the
              previous value to update the state, we must pass that receives the
              previous value and returns an updated value. useState() work with
              asynchronous way. we will not get value a synchronous way, for
              this reason, we have to follow a few rules to get the value
              synchronous way.
            </p>
          </div>
          <div className="questions">
            <h3>Props vs State</h3>
            <p>
              <b>props</b> <br /> #) The Data is passed from one component to
              another. <br />
              #) It is can not be modified. <br /> #) Props are read-only.{" "}
              <br />
              <b>State</b> <br /> #) The Data is passed within the component
              only. <br />
              #) It is can be modified. <br /> #) State is both read and write.
            </p>
          </div>
        </div>
        <div className="main-cart">
          <Cart
            setCart={setCart}
            getRandom={getRandom}
            setRen={setRen}
            ran={ran}
            cart={cart}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
