import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { addToCart } = props;
  const { id, name, img, price } = props.product;
  //   console.log(props);
  return (
    <div className="singleProduct">
      <div className="details">
        <img src={img} alt="" />
        <h5>{name}</h5>
        <p> ${price}</p>
        <button onClick={() => addToCart(props.product)} className="addtocart">
          <p>Add To Cart</p>{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
