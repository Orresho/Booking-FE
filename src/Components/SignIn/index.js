import React from "react";
import { Link } from "react-router-dom";
import Input from "../../_CustomFormComponents/NormalInput";

import './style.css';

const SignIn = ({
  heading,
  onSubmitHandler,
  onChangeHandler,
  error }) => (

    <div className="SignIn">
      <h1>{heading && heading}</h1>
      <form onSubmit={onSubmitHandler} className="form">
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => onChangeHandler(e, "email")} />

        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => onChangeHandler(e, "password")} />
        
        <div className="errorMessage">
          {error &&
            <p>{error.message}</p>}
        </div>

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