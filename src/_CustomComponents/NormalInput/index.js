import React, { Component } from "react";

import './style.css'

class Input extends Component {
  render() {

    const { type, placeholder } = this.props;
    return (
      <div className="inputWrapper">
        <input 
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;