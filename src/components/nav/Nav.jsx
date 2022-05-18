/*imports to be done*/ 
import React from 'react'

/*imports nav.css*/ 
import './nav.css'

/*import icons for nav*/  

/*import home icon*/ 
import {BiHomeHeart} from 'react-icons/bi'

/*import user icon*/ 
import{AiOutlineUser} from 'react-icons/ai'

/*import experience icon*/ 
import {RiComputerLine} from 'react-icons/ri'


/*import portfolio icon*/ 
import {HiOutlineBriefcase} from 'react-icons/hi'


/*import telephone icon*/ 
import {BsTelephone} from 'react-icons/bs'

/*import useState. This helps change the active link when it is <changed></changed*/   
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  /*set the active nav to the one in bracket. If classname is that, make it active else, leave it line 35-40*/
  return (
    <nav>
      <a href="#"onClick={()=> setActiveNav('#')}  className={activeNav==='#' ? 'active': ''}><BiHomeHeart/></a>
      <a href="#about"onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active': ''}><RiComputerLine/></a>
      <a href="#portfolio"onClick={()=> setActiveNav('#portfolio')}  className={activeNav==='#portfolio' ? 'active': ''}><HiOutlineBriefcase/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active': ''}><BsTelephone/></a>
  
    </nav>
  )
}

export default Nav