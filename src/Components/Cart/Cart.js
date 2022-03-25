import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <div className="text">
        <p>Selected Items: </p>
        <p>Total Price: $ </p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $ </p>
        <h3>Grand Total: $ </h3>
      </div>
    </div>
  );
};

export default Cart;
