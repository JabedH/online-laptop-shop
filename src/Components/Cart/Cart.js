import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const { allDelete, setDelete } = useState();
  const deleteCart = (item) => {
    console.log(item);
  };
  const { cart } = props;
  console.log(props.cart);
  return (
    <div className="cart">
      <h1>Selected Laptops</h1>
      <div className="text">
        {cart.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h5>{item.name}</h5>
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            <a href="#" key={item.id} onClick={deleteCart}>
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
        ))}
        <div className="my-btn">
          <button>CHOOSE 1 FOR ME</button>
          <button>CHOOSE AGAIN</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
