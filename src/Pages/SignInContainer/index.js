import React, { Component } from "react";
import BasePage from '../Basepage';
import SignInWidget from "../../Components/SignIn";

class SignInContainer extends Component {
  render(){
    return (
      <BasePage>
        <SignInWidget heading="Sign in" />
      </BasePage>
    );
  }
}

export default SignInContainer; 