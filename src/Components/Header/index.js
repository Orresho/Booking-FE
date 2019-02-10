import React from "react";
import { Link, NavLink } from "react-router-dom";

import navigationConfig from '../../_config/mainNav';

import './style.css';

const Header = ({ isAuthenticated, signOut }) => (
  <div className="Header">

    <div className="logo-left">
      <Link to="/">Logo here</Link>
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
    {isAuthenticated ? (
      <div className="user-membership-actions-right">
          <Link to="/" onClick={signOut} className="button secondary">Sign Out</Link>
      </div>
    ) : (
        <div className="user-membership-actions-right">
          <Link to="/sign-in" className="button primary">Sign in</Link>
        </div>
      )}
  </div>
)

export default Header;