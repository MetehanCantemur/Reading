import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import okuma from "../assets/okuma.png";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="main">
          <img src={okuma} alt="" />
          <div className="mainLink">
           <Link to="/"></Link>
            <Link to="/">Home</Link>
            <Link to="/products">Books</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
