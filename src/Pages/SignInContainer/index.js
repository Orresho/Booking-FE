import React, { Component } from "react";
import BasePage from '../Basepage';
import SignInWidget from "../../Components/SignIn";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SignInAction } from "../../Redux/Actions/user";

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
        
        // Pass data as payload to redux store
        this.props.signIn(data);

        // Redirect to index page
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

export default withRouter(connect(
  state => ({

  }),
  dispatch => ({
    signIn: payload => dispatch(SignInAction(payload))
  }))(SignInContainer)); 