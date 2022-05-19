/*imports to be done*/ 
import React from 'react'

/*import footer.css*/ 
import './footer.css'

/*import icons*/
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
     <a href="#" className='footer__logo'></a>

     <ul className='permalinks'>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
       <a href="https://web.facebook.com/?_rdc=1&_rdr"><FaFacebookSquare/></a>
       <a href="https://twitter.com/home?lang=en"><AiOutlineTwitter/></a>
       <a href="https://dribbble.com"><BsDribbble/></a>
     </div>
   </footer>
  )
}

export default Footer