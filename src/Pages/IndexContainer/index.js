import React, { Component } from "react";
import BasePage from '../Basepage';
import Home from "../../Components/Home";
import HomeAuthenticated from "../../Components/Home-Auth";
import { connect } from "react-redux";

class TestContainer extends Component {

  render() {
    const { isAuthenticated } = this.props;
    return (
      <BasePage>
        {isAuthenticated ? (
          <HomeAuthenticated />
        ) : (
            <Home />
          )}
      </BasePage>
    );
  }
}

export default connect(state => ({
  isAuthenticated: state.user.isAuthenticated,
  userType: state.user.userType,
  userId: state.user.sessionId,
}))(TestContainer); 