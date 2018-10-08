import React, { Component } from "react";
import BasePage from '../Basepage';
import Home from "../../Components/Home";
import HomeAuthenticated from "../../Components/Home-Auth";
import { connect } from "react-redux";
import { SetUserType } from "../../Redux/Actions/user";
import Basepage from "../Basepage";
import { setUserTypeToFirebase } from "../../firebase/user";

class TestContainer extends Component {

  _handleChooseUserType = (userType) => {
    const { setUserType, userId } = this.props;

    setUserTypeToFirebase(userId, userType)
      .then(() => setUserType(userType))
      .catch(err => console.log(err))
  }

  render() {
    const { isAuthenticated, userType } = this.props;

    if (!userType) {
      return (
        <div>
          {isAuthenticated ? (
            <HomeAuthenticated onChooseUserType={this._handleChooseUserType} />
          ) : (
              <Basepage>
                <Home />
              </Basepage>
            )}
        </div>
      );
    } else {
      return (
        <BasePage>
          <h2>Some other home page where user already has chosen realm</h2>
        </BasePage>
      );
    }

  }
}

export default connect(state => ({
  isAuthenticated: state.user.isAuthenticated,
  userType: state.user.userType,
  userId: state.user.sessionId,
}), dispatch => ({
  setUserType: payload => dispatch(SetUserType(payload))
}))(TestContainer); 