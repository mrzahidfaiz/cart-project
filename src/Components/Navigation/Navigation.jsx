import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import brand_logo from "./brand_logo.jpg";
import { useCart } from "../../Contexts/CartProvide";

const Navigation = () => {
    const { cart } = useCart();
  return (
    <header className="headerContainer">
      <nav>
        <div className="brandLogo">
          <img src={brand_logo} alt="_Brand_logo" />
          <NavLink to="/">
            <h1>
              <GoHome />
            </h1>
          </NavLink>
        </div>
        <div>
          <form className="searchForm">
            <input type="text" placeholder="Search..." ref={InputRef} />
            <button>
              <BsSearch />
            </button>
          </form>
        </div>
        <div>
          <NavLink to="/cart">
            <h1>
              <AiOutlineShoppingCart /><span className="cart_span">{cart.length}</span>
            </h1>
          </NavLink>
        </div>
        <div className="login_signup_btn">
          <NavLink>
            <button className="button_login">Login</button>
          </NavLink>
          <NavLink>
            <button className="button_login">SignUp</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
