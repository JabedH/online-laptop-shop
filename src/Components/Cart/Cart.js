import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const { cart, getRandom, ran, setCart, setRen } = props;

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

        <div className="my-btn">
          {/* show random product */}
          <div className="item">
            <img src={ran.img} alt="" />
            <h5> {ran.name}</h5>
          </div>
          <button onClick={() => getRandom(cart)}>CHOOSE 1 FOR ME</button>
          <button onClick={() => setCart([]) & setRen([])}>CHOOSE AGAIN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
