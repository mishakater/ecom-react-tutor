import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-sign-up.page.styles.scss";

export const SignInSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <div className='sign-wrapper'>
      <SignIn />
      <SignUp />
    </div>
  </div>
);
