import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * HOC for protecting routes user should not be able to visit based on some state.
 */
export default ProtectedComponent => {
  class withAuthorization extends Component {
    render() {
      const { isAuthenticated } = this.props;
      if (isAuthenticated) {
        return (
          <div>
            <p>Cannot access this route!</p>
          </div>
        );
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
