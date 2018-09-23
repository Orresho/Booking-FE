import React from "react";
import { Link } from "react-router-dom";
import Input from "../../_CustomFormComponents/NormalInput";

import './style.css';

const SignUp = ({
  onSubmitHandler,
  onChangeHandler,
  heading,
  error }) => (

    <div className="SignUp">
      <h1>{heading && heading}</h1>
      <form onSubmit={onSubmitHandler} className="form">
        <Input
          type="text"
          placeholder="User name"
          name="username"
          onChange={(e) => onChangeHandler(e, "username")} />

        <Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => onChangeHandler(e, "email")} />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => onChangeHandler(e, "password")} />

        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => onChangeHandler(e, "confirmPassword")} />

        <div className="errorMessage">
          {error &&
            <p>{error.message}</p>}
        </div>

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