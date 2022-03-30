import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
export const Header = () => (
  <div className='container'>
    <div className='header-items-container'>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "header-logo-active" : "")}
      >
        <Logo />
      </NavLink>

      <div className='header-links-container'>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/"}>CONTACT</Link>
        <Link to={"/sign-in"}>SIGN IN</Link>
      </div>
    </div>
  </div>
);
