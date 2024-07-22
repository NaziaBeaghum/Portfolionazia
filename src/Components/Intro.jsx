import React from 'react'
import './Intro.css'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
    
    <div className='intro_container'>
     
         <div className="content">
          <div className="home_content">
            <p style={{fontWeight:"bold"}}>Hi,Im  Nazia</p>
            <h2 style={{color:"white"}}>React<span className='content_span'>Developer</span></h2>
            <div className='btn_div'>
              <a href='https://docs.google.com/document/d/e/2PACX-1vRia3GL_HkQaBEg-SyKZ9FNtcepYDSR5ZAY8voQTszAFBMJ5cgFcKdF0UCQFHFPIyFOhLENDezqMCm5/pub' className='home_btn'>Resume</a>
              <button className='home_btn' ><Link to='/contact' >Contact </Link></button>
            </div>

           </div> 
        </div>
   </div>
   </>
  )
}

export default Intro