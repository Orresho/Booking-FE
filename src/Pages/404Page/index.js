import React, { Component } from "react";
import BasePage from "../Basepage";

class NotExistPage extends Component {
  render() {
    return (
      <BasePage>
        <h3>Page does not exist!</h3>
      </BasePage>
    );
  }
}

export default NotExistPage;