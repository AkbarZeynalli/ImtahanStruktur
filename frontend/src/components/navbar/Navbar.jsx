import React from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { basket } = useSelector((state) => state.basket);
  const totalCount = basket.reduce((acc, item) => acc + item.count, 0);
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
            <Link to="/wishlist">
              <FaHeart />
            </Link>
          </div>
          <div className="navList-item">
            <Link to="/basket">
              <SlBasket />
              <sup>{totalCount}</sup>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
