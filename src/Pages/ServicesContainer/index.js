import React, { Component } from 'react';
import BasePage from '../Basepage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <BasePage>
        Here is some shit icon testing <FontAwesomeIcon icon="spinner" size="2x" spin={true}/>
      </BasePage>
    );
  }
}

export default App;
