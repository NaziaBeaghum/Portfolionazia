import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Paper,Stack, Typography,Box } from '@mui/material'
 import'./contact.css'
 import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';


 const Contact = () => {
  const[formvalue,setformvalue]=useState({user_name:"",user_email:"",message:""})


  const handleChange=(e)=>{
    const{name,value}=e.target;
    setformvalue({...formvalue,[name]:value})
    console.log(formvalue)
   }
  const path='none'
  const sendEmail = (e) => {
    e.preventDefault();
    const dynamicformvalues={
       from_name:formvalue.user_name,
      from_email:formvalue.user_email,
      to_name:"nazia",
      message:formvalue.message
    }
      console.log(dynamicformvalues)
      emailjs.send('service_3ybb3rl', 'template_l7qcbog',dynamicformvalues,'gfAWjqqS4JvjAlBGX')
        .then((result) => {
           console.log(result.text);
            alert("Mail sent Successfully")
            setformvalue({user_name:"",user_email:"",message:""})
       })
        .catch((error) => {
            console.log(error.text);
      });
     };
  
  
 
  
  return (
    <div style={{backgroundImage:`url(${path})`}}>
      
        <div className='chat'>
           <div>
           <Typography variant='h4' marginTop={0}>Let's have a Chat</Typography>           
           </div>
            
         <form  onSubmit={sendEmail}>

          <input type="text"  
            className='form-elt'
            name="user_name"
            onChange={handleChange} 
            placeholder='fullname*'/><br/> 

          <input type="email" 
             className='form-elt'
             name="user_email"
             placeholder='Email address*'
             onChange={handleChange} />
             <br/>

          <label>Message</label><br/>
          <input  className='form-elt' 
           type="text"
           onChange={handleChange}
           name='message'/><br/>

          <input className='form-btn' type="submit" value="Send Message" /> 
       </form>
     </div>

    </div>

  )
}
export default Contact