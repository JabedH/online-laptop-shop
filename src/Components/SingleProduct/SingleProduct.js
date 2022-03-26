import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProduct = (props) => {
  const { name, img, price } = props.product;
  return (
    <div className="singleProduct">
      <div className="details">
        <img src={img} alt="" />
        <h5>{name}</h5>
        <p> ${price}</p>
        <button
          onClick={() => props.addToCart(props.product)}
          className="addtocart"
        >
          <p>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
