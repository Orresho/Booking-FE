import React from "react";
import { Link } from "react-router-dom";

//Config import
import data from "../../_config/realms";

import './style.css';

const HomeAuth = ({ onChooseUserType }) => {
  return (
    <div className="HomeAuth content-padded">
      <div className="top-heading">
        <h1>Welcome user!</h1>
      </div>


      <div className="realm-options">
        {data &&
          data.map((item, key) => (
            <Link 
              to={item.url} 
              key={key} className="realm"
              onClick={() => onChooseUserType(item.metaData.userType)}>
              <div>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
      </div>

      <div className="realm-options">
        {data &&
          data.map((item, key) => (
            <ul key={key} className="benefits">
              {item.metaData && item.metaData.benefits.map((item, key) => (
                <li key={key}>{item.title}</li>
              ))}
            </ul>
          ))}
      </div>

    </div>
  );
}

export default HomeAuth;