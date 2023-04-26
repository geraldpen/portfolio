import React from "react";
import { useRef } from "react";
import "../styles/Navba.css";
import {FaBars, FaTimes} from "react-icons/fa"
function Navbar() {

  const navRef = useRef();

  const showNavbar = () =>{
   navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div className="header">
          <h2 className="logo">Gerald Penn</h2>
          <nav ref={navRef}>
            <a onClick={showNavbar} href="/home">Home</a>
            <a onClick={showNavbar} href="/experience">Experience</a>
            {/* <a onClick={showNavbar} href="/project">Project</a> */}
            <a onClick={showNavbar} href="/contact">Contact</a>
  
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
              <FaTimes/>
            </button>
            
          </nav>
          <button onClick={showNavbar} className="nav-btn">
              <FaBars/>
            </button>
        </div>
  )
}
export default Navbar
