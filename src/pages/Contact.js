// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css"
function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a7jksmd', 'template_o0adp7w', form.current, '_DfDMdBUQB5Sgjmib')
      .then((result) => {
          console.log(result.text);

          alert("Your Email has been Send");
      },
     
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contactForm">
      
     <div className='contactMe'><h1> Contact Me</h1>
      <address>
        <strong> Email: geraldopenn@gmail.com</strong>
        <br/><br/>
        <strong>Phone: 671975200</strong>

        <br/><br/>
       <strong> Address: Etoug-Ebe, Yaounde-Cameroon</strong>
      </address>
      </div>
     <form ref={form} onSubmit={sendEmail}>
      <div className='formData'>
      
         <div className='user'>
              <input type="text" name="user_name"  placeholder='Name' />
      
              <input type="email" name="user_email" placeholder='Email'/>
          </div>
      <div className = "message">
  
      <textarea name="message" placeholder='Message' />
      </div>
      <input type="submit" value="Send" className="button" />
      </div>
     </form>
    </div>
  );
}

export default About
