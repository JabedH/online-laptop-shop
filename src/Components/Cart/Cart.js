import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  return (
    <div className="cart">
      <h1>Selected Laptops</h1>
      <div className="text">
        {cart.map((item) => (
          <div className="item">
            <img src={item.img} alt="" />
            <h5>{item.name}</h5>
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            <a href="#">
              {" "}
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
