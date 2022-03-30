import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { SignInSignUp } from "./pages/sing-in-sign-up/sign-in-sign-up.page.component";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='sign-in' element={<SignInSignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
