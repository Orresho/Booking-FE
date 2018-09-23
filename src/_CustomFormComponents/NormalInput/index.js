import React, { Component } from "react";

import './style.css'

class Input extends Component {
  render() {
    const {
      type,
      name,
      placeholder,
      onChange,
      value } = this.props;

    return (
      <div className="inputWrapper">
        <input
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;