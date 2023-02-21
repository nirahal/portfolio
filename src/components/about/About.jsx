import React from 'react'
import './about.css'
import ME from '../../assets/me_bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faUsers, faFolder } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About image"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FontAwesomeIcon className='about__icon' icon={faAward} />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
         
        
            <article className="about__card">
            <FontAwesomeIcon className='about__icon' icon={faUsers} />
              <h5>Clients</h5>
              <small>20+ WorldWide</small>
            </article>
          
          
            <article className="about__card">
            <FontAwesomeIcon className='about__icon' icon={faFolder} />
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>

          <p>"Passionate Software Engineer with 2+ years of hand-on experience in developing scalable websites / applications using a wide-range of front-end and back-end skills. Dedicated to learn additional technologies and codding languages." <br></br> <b>Looking for an opportunity to exploit my potential and grow.</b></p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

      </div>


    </section>
  )
}

export default About