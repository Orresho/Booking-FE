import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import './style.css';

const MobileHeader = ({ isAuthenticated, signOut, openDrawer }) => (
  <div className="Mobile-Header">
    <div className="mobile-container">
        <div className="drawer" onClick={openDrawer}>
          <FontAwesomeIcon icon="bars" size="2x"/>
        </div>

        <div className="logo-wrapper">
          <p>Logo Here</p>
        </div>

        <div>
          {!isAuthenticated ? (
              <Link to="/sign-in" className="button-link secondary-button-mobile">Sign in</Link>
          ) : (
            <button 
              className="secondary-button-mobile"
              onClick={signOut}>Sign Out</button>
          )}
        </div>
    </div>
  </div>
);

export default MobileHeader;