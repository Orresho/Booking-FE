import React, { Component } from "react";
import BasePage from '../Basepage';

import SignUpWidget from "../../Components/SignUp";
import { withRouter } from "react-router-dom";

class SignUpContainer extends Component {
 
  // Default state of signup fields
  initial_state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  state = {
    ...this.initial_state,
    errorMessage: '',
    successMessage: ''
  }

  _handleOnSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
  }

  // propName passed as string but used as property name here representing a 
  // given property name in state to change state
  _handleOnChange = (e, propName) => {
    let value = e.target.value;
    this.setState({ [propName]: value })
  }

  render() {
    return (
      <BasePage>
        <div className="signup-container">
          <div className="Signup-widget">
            <SignUpWidget
              heading="Sign up"
              onSubmitHandler={this._handleOnSubmit}
              onChangeHandler={this._handleOnChange}
              error={this.state.errorMessage} />
          </div>
        </div>
      </BasePage>
    );
  }
}

export default withRouter(SignUpContainer); 