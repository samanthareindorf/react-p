/*imports to racef*/ 

import React from 'react'

/*import header.css*/ 
import './header.css'

/*import the CALL to action (CTA) for the buttons */ 
import CTA from './CTA'

const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hello, I am</h5>
      <h1>Samantha Reindorf</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
    </div>
  </header>
  )
}

export default Header