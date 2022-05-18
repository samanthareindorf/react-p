/*import rafce*/ 

import React from 'react'

/*imports css file*/
import './experience.css'

/*import icons for dev languages*/ 
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from "react-icons/io"
import {DiJavascript1} from 'react-icons/di'
import {SiBootstrap} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'







const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiOutlineHtml5 className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <IoLogoCss3 className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <DiJavascript1 className='experience__details-icon' />
            <div>
            <h4>JAVASCRIPT</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiBootstrap className='experience__details-icon'/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>REACT</h4>
            <small>Beginner</small>
            </div>
          </article>


        </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
            <FaPhp className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <FaNode className='experience__details-icon'/>
            <div>
            <h4>Node</h4>
            <small>Beginner</small>
            </div>
          </article>


        </div>


        </div>
      </div>

    </section>
  )
}

export default Experience