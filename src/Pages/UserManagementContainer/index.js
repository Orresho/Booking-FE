import React, { Component } from 'react';
import BasePage from '../Basepage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserManagement extends Component {
  render() {
    return (
      <BasePage>
        <div>
          <h2>User Management</h2>
          <FontAwesomeIcon icon="spinner" size="2x" spin={true}/>
        </div>
      </BasePage>
    );
  }
}

export default UserManagement;
