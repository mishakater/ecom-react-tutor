import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

export const Header = ({ currentUser }) => {
  return (
    <div className='container'>
      <header>
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

            {currentUser ? (
              <div className='sign-out-link' onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <Link to={"/sign-in"}>SIGN IN</Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
