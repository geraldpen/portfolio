import React from 'react'
import "../styles/Home.css";
import { FaLinkedin,FaFacebook, FaWhatsapp } from 'react-icons/fa';
function Home() {
  return (
    <div className="">
      <div className="heade">
       <h2 className="mai">
        Hi, < br/> < br/>i'm Mokom Gerald,</h2>
      <p>A mern stack developer with the passion to learn</p>
      <div className="icons">
            <a  href="https://wa.me/c/237671975200 "><FaWhatsapp/></a>
            <a  href="https://www.linkedin.com/public-profile/settings"><FaLinkedin/></a>
            <a  href="https://www.linkedin.com/publicrofile/settings"> <FaFacebook/></a>
     
      </div>
      </div>
      <div className="skills">
         <h1>Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>Front-End</h2> <br></br>
              <span>ReactJS, HTML, CSS, NPM, Bootstrap, Javascript</span>
            </li>

            <li className="item">
              <h2>Back-End</h2><br></br>
              <span>NodeJS, PHP, Expreess, MySQL, MongoDB</span>
            </li>

            <li className="item">
              <h2>Other Skills</h2><br></br>
              <span>python, Java, C, C++, Visua Basics, Solidity, System design (sdlc), github/git </span>
            </li>
          </ol>
         </div>

    
    </div>
    
  )
}

export default Home
