import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <h1>Selected Laptops</h1>
      <div className="text">
        <p>Selected Items: </p>
        <div className="my-btn">
          <button>CHOOSE 1 FOR ME</button>
          <button>CHOOSE AGAIN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
