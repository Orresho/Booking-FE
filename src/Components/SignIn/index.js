import React from "react";
import { Link } from "react-router-dom";
import Input from "../../_CustomComponents/NormalInput";

import './style.css';

const SignIn = ({ heading, onSubmit }) => (
  <div className="SignIn">
    <h1>{heading && heading}</h1>
    <form onSubmit={onSubmit} className="form">
      <Input type="text" placeholder="User name" />
      <Input type="password" placeholder="Password" />

      <button type="submit" className="primary-button">
        Sign in
      </button>

      <div className="reset-password">
        <Link
          className="reset-password"
          to="/reset-password">Forgot password?</Link>
      </div>
    </form>
  </div>
);

export default SignIn;