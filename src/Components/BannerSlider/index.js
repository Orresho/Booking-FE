import React, { Component } from "react";
import Slider from "react-slick";

//Config
import bannerData from "../../_config/bannerSlider";

import './style.css';

class BannerSlider extends Component {
  render() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: false,
    };

    return (
      <div className="slider">
        <Slider {...settings}>
          {bannerData &&
            bannerData.map((item, key) => (
              <div className="slide" key={key}>
                {/* <img src={item.image} alt={item.title} /> */}
                <div className="banner-content">
                  <h1>{item.title}</h1>
                  <h4>{item.description}</h4>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default BannerSlider;