import React, { Component } from "react";
import BasePage from '../Basepage';

import SignUpWidget from "../../Components/SignUp";

class SignUpContainer extends Component {
  render() {
    return (
      <BasePage>
        <div className="signup-container">
          <div className="Signup-widget">
            <SignUpWidget heading="Sign up" />
          </div>
        </div>
      </BasePage>
    );
  }
}

export default SignUpContainer; 