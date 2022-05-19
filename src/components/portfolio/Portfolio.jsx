/*imports to be done*/ 
import React from 'react'

/*import portfolio.css*/ 
import './portfolio.css'

/*import images */
import dash1 from "../../assets/dash1.jpg"
import dash2 from "../../assets/dash2.jpg"
import dash3 from "../../assets/dash3.png"
import dash4 from "../../assets/dash4.jpg"
import dash5 from "../../assets/dash5.jpg"
import dash6 from "../../assets/dash6.jpg"



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Racent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item' id='botom'>
          <div className="portfolio__item__image">
            <img src={dash1} alt="first" />

          </div>
            <h3>Choose Your Church</h3>
            
            <div className="portfolio__item-cta">
                <a href="https://github.com/samreindorf" className='btn'>Github</a>
                <a href="https://youtu.be/cpxoPLBJBcg" className='btn btn-primary' target='_blank'>Live demo</a>
            </div>
            
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={dash2} alt="second" />

          </div>
            <h3>Hospital</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/samreindorf" className='btn'>Github</a>
              <a href="https://www.figma.com/proto/eR8CroUGhivwFl2HCMiNJB/JGo-Redo-of-WR?page-id=0%3A1&node-id=3%3A3&scaling=scale-down" className='btn btn-primary' target='_blank'>Live demo</a>

            </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={dash3} alt="third" />

          </div>
            <h3>SPLASHY</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/samreindorf" className='btn'>Github</a>
             <a href="#" className='btn btn-primary'>Live demo</a>

            </div>
            
           
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={dash4} alt="fourth" />

          </div>
            <h3>CRM</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/samreindorf" className='btn'>Github</a>
              <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

            </div>
            
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={dash5} alt="fifth" />

          </div>
            <h3>iLEARN</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/samreindorf" className='btn'>Github</a>
              <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

            </div>
            
        </article>

        
        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={dash6} alt="sixth" />

          </div>
            <h3>Kutukun</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/samreindorf" className='btn'>Github</a>
              <a href="#" className='btn btn-primary' target='_blank'>Live demo</a>

            </div>
            
        </article>


      </div>


    </section>
  )
}

export default Portfolio