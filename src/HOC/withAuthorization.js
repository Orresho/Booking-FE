import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

/**
 * HOC for protecting routes user should not be able to visit based on some state.
 */
export default ProtectedComponent => {
  class withAuthorization extends Component {
    render() {
      const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        /* TODO: Add previous visited url instead */
        return <Redirect to="/" />
      } else {
        return (
          <ProtectedComponent {...this.props} />
        );
      }
    }
  }

  return connect(
    state => ({
      isAuthenticated: state.user.isAuthenticated,
    }))(withAuthorization);
};
