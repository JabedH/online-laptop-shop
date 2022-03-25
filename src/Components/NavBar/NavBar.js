import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Online Laptop Shop</h1>
      <div className="navbar-item">
        <a href="">Order</a>
        <a href="">Manage Inventory</a>
        <a href="#"> </a>
      </div>
    </div>
  );
};

export default NavBar;
