import React from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">

      <article className="service">
        <div className='service__head'>
          <h3>Knowledge</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Software Engineering degree.</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Online certifications from Harvard university.</p>  
          </li>
          <li>      
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Excellent verbal communication skills (ICAO Level 4 In English).</p>
          </li>   
          <li>        
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Updated to the latest theoretical and practical concepts of Artificial Intelligence .</p>   
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Good problem solving skills.Attention to detail.</p>    
          </li>
        </ul>
      </article>
        

      <article className="service">
        <div className='service__head'>
          <h3>Tailored Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Creation and development of intuitive and responsive websites.</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Conception of functionalities and integration of APIs.</p>  
          </li>
          <li>      
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Coding, testing and debugging skills.</p>
          </li>   
          <li>        
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Proficiency with fundamental front end and back end languages and frameworks.</p>   
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Writing and maintaining proper documentation.</p>    
          </li>
        </ul>
      </article>

      <article className="service">
        <div className='service__head'>
          <h3>Project management</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Efficient planning, coordination and excecution.</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Respect of timelines, constraints and clents' specifications.</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Constant tracking of progress and evaluation of quality.</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Best practice strategies to help ensure projects are completed on time and within budget.</p>         
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>Adapting and being flexible to changes through the project growth.</p>          
          </li>
        </ul>
      </article>

      



      </div>
    </section>
  )
}

export default Services