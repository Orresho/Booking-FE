import React, { Component } from "react";
import BasePage from '../Basepage';
import SignInWidget from "../../Components/SignIn";
import { withRouter } from "react-router-dom";

// Firebase
import { auth } from "../../firebase";

class SignInContainer extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: '',
  }

  _handleOnSubmit = (e) => {
    const { email, password } = this.state;
    auth.emailAndPasswordUserAuthentication(email, password)
      .then((data) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ errorMessage: error })
      })

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
        <SignInWidget
          heading="Sign in"
          onSubmitHandler={this._handleOnSubmit}
          onChangeHandler={this._handleOnChange}
          error={this.state.errorMessage} />
      </BasePage>
    );
  }
}

export default withRouter(SignInContainer); 