import React from 'react';
import './style.css';
import data from '../../../_config/home_Information';

const Information = () => {
  return (
    <div className="information-content content-padded">
      {data && data.map((item, key) => (
        <div className={`information-content-${item.side}`} key={key}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Information;