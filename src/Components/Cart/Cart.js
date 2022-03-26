import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const { cart } = props;
  // random number
  const getRandom = (cart) => {
    // const random = Math.random(getData);
    var rand = cart[(Math.random() * cart.length) | 0];
    console.log(rand.name);
    return rand.name;
  };
  return (
    <div className="cart">
      <h1>Selected Laptops</h1>
      <div className="text">
        {cart.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <h5>{item.name}</h5>
            <a href="#">
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
        ))}
        <div></div>
        <div className="my-btn">
          <button onClick={() => getRandom(cart)}>CHOOSE 1 FOR ME</button>
          <button>CHOOSE AGAIN</button>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
