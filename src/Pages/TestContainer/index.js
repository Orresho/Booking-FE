import React, { Component } from "react";
import BasePage from '../Basepage';

class TestContainer extends Component {
  render(){
    return (
      <BasePage>
        <div>
          Hello From TestContainer page on INDEX route
        </div>
      </BasePage>
    );
  }
}

export default TestContainer;