import React from 'react';
import "../styles/Footer.css";
import { FaTwitter,FaLinkedin,FaFacebook, FaWhatsapp} from 'react-icons/fa';
function Footer() {
  return (
    <div className="footer">
       <h3>Social Medials</h3>
      <div className="icons">
      <a  href="https://wa.me/c/237671975200 "><FaWhatsapp/></a>
            <a  href="https://www.linkedin.com/public-profile/settings"><FaLinkedin/></a>
            <a  href="#"> <FaFacebook/></a>
      </div>

      <p> &copy; 2023 GeraldPenn.com</p>
    </div>
  )
}

export default Footer
