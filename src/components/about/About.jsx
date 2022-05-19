/*import the component for react*/   

import React from 'react'

/*import the css file*/
import './about.css'

/*import the image*/ 
import other from '../../assets/other.png'

/*import icons*/ 
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {TiCodeOutline} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>Here is more</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__phot">
          <div className="about__myphot">
            <img src={other} alt="pic" />

          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>3 years work Experience</small>
            </article>

            <article className='about__card'>
              <HiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>1 so far</small>
            </article>

            <article className='about__card'>
              <TiCodeOutline  className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ projects</small>
            </article>

          </div>

          <p>
            Detailed works on projects are available in the portfolio section where you have access to 
            the github page and a live demo of the website on my YouTube channel!!! Please like
            the videos, share and subscribe! Thank you for viewing my work. Much appreciation. My 
            codes are also available on sale at a subsidized price! Yes! Click the let's talk button 
            and get to know more. 
          </p>

          <a href="#contact" className='btn btn-primary' id='contact'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About