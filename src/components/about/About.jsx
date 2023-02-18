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
              <small>200+ WorldWide</small>
            </article>
          
          
            <article className="about__card">
            <FontAwesomeIcon className='about__icon' icon={faFolder} />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>


    </section>
  )
}

export default About