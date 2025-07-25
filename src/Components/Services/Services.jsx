import React from "react";

import "./Services.css";
import Service_Data from "../../assets/data/service_data.js";

const Services = () => {
  return (
    <section id="services">
    <div  className="services">
      <div className="services-title">
        <h1>My Projects</h1>
      </div>
      <div className="services-container">
        {Service_Data.map((service, index) => {
          return (
            <div className="services-format" key={index}>
              <h2>{service.no}</h2>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="services-readmore">
                <p>Read More</p>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default Services;
