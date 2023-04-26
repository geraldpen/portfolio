import React from 'react';
import ProjectItem from '../components/ProjectItem';
import {ProjectList} from "../helper/ProjectList";
import "../styles/Project.css";
function Project() {
  return (
    <div className="project">
     <h>My Personal Projects</h> 
     <div className="projectList">
      {ProjectList.map((project, idx) =>{
        return  <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
     
     </div>
    </div>
  )
}

export default Project
  