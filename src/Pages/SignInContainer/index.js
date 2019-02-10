import React, { Component } from "react";
import BasePage from '../Basepage';
import SignInWidget from "../../Components/SignIn";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SignInAction, SetAuthUser } from "../../Redux/Actions/user";

class SignInContainer extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: '',
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
        <SignInWidget
          heading="Sign in"
          onSubmitHandler={this._handleOnSubmit}
          onChangeHandler={this._handleOnChange}
          error={this.state.errorMessage} />
      </BasePage>
    );
  }
}

export default withRouter(connect(
  state => ({

  }),
  dispatch => ({
    signIn: payload => dispatch(SignInAction(payload)),
    setAuthUser: payload => dispatch(SetAuthUser(payload))

  }))(SignInContainer)); 