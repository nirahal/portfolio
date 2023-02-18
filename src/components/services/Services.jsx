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
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>
        </ul>
      </article>

      <article className="service">
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>  
          </li>   
          <li>   
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>   
          </li>
          <li>      
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
          </li>   
          <li>        
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>   
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>    
          </li>
        </ul>
      </article>

      <article className="service">
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>          
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>         
          </li>
          <li>
            <FontAwesomeIcon className="service__list-icon" icon={faCheck} />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>          
          </li>
        </ul>
      </article>

      



      </div>
    </section>
  )
}

export default Services