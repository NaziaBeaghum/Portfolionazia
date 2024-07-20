import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './Components.css'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const[menuopen,setopen]=useState(true)
    const location=useLocation()
    function handleclick()
    {
        setopen(!menuopen)
        console.log(menuopen)
    }

    useEffect(()=>{
      setopen(false)
    },location)
  return (
    <nav>
        <Link to='/' className='title'>Portfolio.</Link>
        <div className='hamburger' ><MenuIcon onClick={handleclick}/></div>
        <ul className={menuopen?"open":"close"}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/technologies'>Technologies</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar