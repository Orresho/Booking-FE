import React, { Component } from "react";
import BasePage from '../Basepage';

import SignUpWidget from "../../Components/SignUp";
import { withRouter } from "react-router-dom";

// Firebase
import { auth } from "../../firebase";

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

    auth.emailAndPasswordUserCreation(email, password)
      .then(() => {
        // On success we pass a message to local state and redirect user to index page
        this.setState({ successMessage: "User successfully created", ...this.initial_state })
        this.props.history.push('/');
      })
      .catch(error => {
        // Show error for only 4 seconds
        this.setState({ errorMessage: error })
        setTimeout(() => {
          this.setState({ errorMessage: '' });
        }, 4000);
      });

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