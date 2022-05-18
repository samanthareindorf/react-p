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

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeHeart/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><RiComputerLine/></a>
      <a href="#portfolio"><HiOutlineBriefcase/></a>
      <a href="#contact"><BsTelephone/></a>
  
    </nav>
  )
}

export default Nav