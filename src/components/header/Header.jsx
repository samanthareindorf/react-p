/*imports to racef*/ 

import React from 'react'

/*import header.css*/ 
import './header.css'

const Header = () => {
  return (
  <header>
    <div className="container header__container">
      <h5>Hello this is me</h5>
      <h1>Samantha Reindorf</h1>
      <h5 className="text-light">FullStack Developer</h5>
    </div>
  </header>
  )
}

export default Header