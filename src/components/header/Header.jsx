/*imports to racef*/ 

import React from 'react'

/*import header.css*/ 
import './header.css'

/*import the CALL to action (CTA) for the buttons */ 
import CTA from './CTA'

/*import the image to be used in line 24 */
import phot from '../../assets/phot.png'

const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hello, I am</h5>
      <h1>Samantha Reindorf</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />


      <div className="myImg">
        <img src={phot} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header