/*import the raf*/  

/*imports to racef*/ 

import React from 'react'

import SAMANTHA_REINDORF_CV from '../../assets/SAMANTHA_REINDORF_CV.pdf'



const CTA = () => {
  return (
  <div>
      <div className="cta">
          <a href={SAMANTHA_REINDORF_CV} download className="btn"> Download CV</a>
          <a href="#contact" className="btn btn-primary"> Let's Talk</a>
      </div>
  </div>
  )
}

export default CTA