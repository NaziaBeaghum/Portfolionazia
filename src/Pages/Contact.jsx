import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Paper,Stack, Typography,Box } from '@mui/material'
 import'./contact.css'
 import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';


 const Contact = () => {
  const form = useRef();
  const path='assets/bluebg.jpg'

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_37zassx', 'template_gm5ldx9', form.current, 'BIC25dH-p5UpFFZua')
      .then((result) => {
          console.log(result.text);
          console.log("success")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div style={{backgroundImage:`url(${path})`}}>
      
        <div className='chat'>
            <div>
            <Typography variant='h4' marginTop={0}>Let's have a Chat</Typography> 
                    
            </div>
    <form ref={form} onSubmit={sendEmail}>
      
      <input type="text"  className='form-elt' name="user_name" placeholder='fullname*'/><br/>
      
      <input type="email"   className='form-elt'name="user_email" placeholder='Email address*' /><br/>
      <label>Message</label><br/>
      <input  className='form-elt'  type="text"/><br/>
      <input className='form-btn' type="submit" value="Send Message" />
    </form>

    </div>
  </div>
  
  );
};
export default Contact