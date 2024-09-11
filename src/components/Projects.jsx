import React from "react";
import ProjectImage1 from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import ProjectImage2 from "../assets/images/desktop/image-gallery-orange.jpg";
import ProjectImage3 from "../assets/images/desktop/image-gallery-cone.jpg";
import ProjectImage4 from "../assets/images/desktop/image-gallery-sugarcubes.jpg";


const Projects = () => {
  return (
      <div id="projects" className="projects">
        <img className="project" src={ProjectImage1} alt="" />
        <img className="project" src={ProjectImage2} alt="" />
        <img className="project" src={ProjectImage3} alt="" />
        <img className="project" src={ProjectImage4} alt="" />
      </div>
  );
};

export default Projects;
