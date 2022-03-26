import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const { cart, getRandom, ran } = props;
  // random number
  // const getRandom = (cart) => {
  //   var rand = cart[(Math.random() * cart.length) | 0];
  //   return rand.name;
  // };
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
          <h1> {ran}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
