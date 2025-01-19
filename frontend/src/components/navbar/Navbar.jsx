import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <h2>Selling.</h2>
        </div>
        <ul className="nav-list">
          <div className="navList-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navList-item">
            <Link to="/products">Products</Link>
          </div>
          <div className="navList-item">
            <Link to="/about">About</Link>
          </div>
          <div className="navList-item">
            <Link to="/special">Special</Link>
          </div>
          <div className="navList-item">
            <Link to="/testimonials">Testimonials</Link>
          </div>
          <div className="navList-item">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="navList-item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="navList-item">
            <Link to="/admin">Admin</Link>
          </div>
          <div className="navList-item">
            <Link to="/wishlist">Wishlist</Link>
          </div>
          <div className="navList-item">
            <Link to="/basket">Basket</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
