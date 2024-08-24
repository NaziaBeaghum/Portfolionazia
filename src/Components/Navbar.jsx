import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Components.css'

const Navbar = () => {
    const[menuopen,setopen]=useState(false)
   
    function handleclick()
    {
        setopen(!menuopen)
        console.log(menuopen)
    }

   
  return (
    <nav>
        <Link to='/' className='title'>Portfolio.</Link>
       <div  className='hamburger' onClick={handleclick}> {!menuopen?<MenuIcon/>:<CloseIcon/>}</div>
        {/* <div className='hamburger' ><MenuIcon onClick={handleclick}/></div> */}
        <ul className={menuopen?"open":"close"}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/technologies'>Technologies</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar