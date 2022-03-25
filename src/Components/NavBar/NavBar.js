import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Online Laptop Shop</h1>
      <div className="navbar-item">
        <a href="">Order</a>
        <a href="">Manage Inventory</a>
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
