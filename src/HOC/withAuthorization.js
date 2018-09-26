import React, { Component } from "react";
import { connect } from "react-redux";
import { firebase } from "../firebase";
import { SetAuthUser } from "../Redux/Actions/user";

export default ComposedComponent => {
  class withAuthorization extends Component {

    componentDidMount(){
      const { setAuth } = this.props;
      firebase.auth.onAuthStateChanged(user => setAuth(user));
    }

    render() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) return null;

      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return connect(
    state => ({
      isAuthenticated: state.user.isAuthenticated,
    }),
    dispatch => ({
      setAuth: payload => dispatch(SetAuthUser(payload))
    }))(withAuthorization);
};
