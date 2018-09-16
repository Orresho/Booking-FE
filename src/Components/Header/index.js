import React from "react";
import { Link, NavLink } from "react-router-dom";

import navigationConfig from '../../_config/mainNav';

import './style.css';

const Header = () => (
  <div className="Header">

    <div className="logo-left">
      Logo here
    </div>

    <div className="main-navbar">
      <ul>
        {navigationConfig &&
          navigationConfig.map((nav, key) => (
            <li key={key}>
              <NavLink
                to={`/${nav.url}`}
                activeClassName="active">
                {nav.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>

    <div className="user-membership-actions-right">
      <Link to="/sign-up" className="button secondary">Signup</Link>
      <Link to="/sign-in" className="button primary">Signin</Link>
    </div>
  </div>
)

export default Header;