import React from "react";

import "./MyWork.css";
import MyWork_Data from "../../assets/data/mywork_data.js";

const MyWork = () => {
  return (
    <section id="projects">
    <div  className="mywork">
      <div className="mywork-title">
        <h1>My Latest Project</h1>
      </div>
      <div className="mywork-subtitle">
      <p>
        Here are some of the projects I've worked on
      </p>
      </div>
<div className="marquee-container">
  <div className="marquee-track">
    {MyWork_Data.map((work, index) => (
      <div className="mywork-item" key={`original-${index}`}>
        <img src={work.w_image} alt="" />
      </div>
    ))}

    {/* Render item-item Anda SEKALI LAGI untuk loop yang mulus */}
    {MyWork_Data.map((work, index) => (
      <div className="mywork-item" key={`clone-${index}`}>
        <img src={work.w_image} alt="" />
      </div>
    ))}
  </div>
</div>
    </div>
    </section>
  );
};

export default MyWork;
