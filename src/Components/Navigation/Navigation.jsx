import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import brand_logo from "./brand_logo.jpg";

const Navigation = () => {
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
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
        <div>
          <NavLink to="/cart">
            <h1 to="/cart">
              <AiOutlineShoppingCart />
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
