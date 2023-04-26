import React from 'react';
import { useParams} from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import {FaGithub} from 'react-icons/fa';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id]
  return (
  <div className="project"> 
  <h1> {project.name}</h1>
  <img src={project.image} alt=""/>
  <FaGithub/>
  </div>
  
  )
  
}

export default ProjectDisplay
