import React, { Component } from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { SignInSignUp } from "./pages/sing-in-sign-up/sign-in-sign-up.page.component";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Header } from "./components/header/header.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
