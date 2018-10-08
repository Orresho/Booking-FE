import React from "react";
import BannerSlider from "../BannerSlider";
import Information from "./Information";

const Home = () => {
  return (
    <div className="Home">
      <div className="Banner-section">
        <BannerSlider />
      </div>

      <div className="Information-section">
        <Information />
      </div>

    </div>
  );
}

export default Home;