import React from "react";
import rightImage from "../assets/images/desktop/image-photography.jpg";
import leftImage from "../assets/images/desktop/image-graphic-design.jpg";

const Services = () => {
  return (
    <div id="services" className="service-container">
      <div className="services">
        <div className="service-left">
          <div className="text-service">
            <h1>Graphic Design</h1>
            <h4>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </h4>
          </div>
          <img src={leftImage} alt="" />
        </div>
        <div className="service-right">
          <div className="text-service">
            <h1>Photography</h1>
            <h4>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </h4>
          </div>
          <img src={rightImage} alt="" />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Services;
