import React from "react";
import Information from "./Information";
import Munipacity from "./Munipacity";

const Home = () => {
  return (
    <div className="Home">
      <div>
        <Munipacity />
      </div>
      <div>
        <h1>How to use</h1>
      </div>
      <div className="Information-section">
        <Information />
      </div>
    </div>
  );
}

export default Home;