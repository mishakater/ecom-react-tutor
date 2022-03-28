import React from "react";
import "./layout.styles.scss";
import { Header } from "../header/header.component";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => (
  <>
    <header>
      <Header />
    </header>

    <Outlet />

    <footer>
      <div className='container'>
        <span>2022</span>
      </div>
    </footer>
  </>
);
