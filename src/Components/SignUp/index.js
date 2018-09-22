import React from "react";
import { Link } from "react-router-dom";
import Input from "../../_CustomComponents/NormalInput";

import './style.css';

const SignUp = ({ onSubmit, heading }) => (
  <div className="SignUp">
    <h1>{heading && heading}</h1>
    <form onSubmit={onSubmit} className="form">
      <Input type="text" placeholder="User name" />
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />

      <button type="submit" className="primary-button">
        Sign up
      </button>

      <div className="buttonWrapper">
        <p>Already have an account? </p>
        <Link
          className="Button secondary-button"
          to="/sign-in">Sign in</Link>
      </div>
    </form>
  </div>
)

export default SignUp;