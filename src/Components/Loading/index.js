import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

const Loading = () => (
  <div className="Loading">
    <FontAwesomeIcon icon="spinner" size="8x" spin={true}/>
  </div>
)

export default Loading;