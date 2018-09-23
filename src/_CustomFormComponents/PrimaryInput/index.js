import React, { Component } from "react";

class Input extends Component {
  render() {
    const { title, placeholder, error, type } = this.props;

    return (
      <div 
        className={`input ${isFocused ? 'input_focus' : ''}`}
      >
        
        <input
          type={type}
          placeholder={placeholder && placeholder}
        />
      </div>
    );
  }
}