import React from 'react'
import './experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              
              <h4><FontAwesomeIcon icon={faCheckDouble} /> HTML</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> CSS</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> JavaScript</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> Bootstrap</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> React</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
          </div>

        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> Node Js</h4>
              <div><small className='text-light'>Intermeditae</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> PHP</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> MySQL</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> Python</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <h4><FontAwesomeIcon icon={faCheckDouble} /> Laravel</h4>
              <div><small className='text-light'>Experienced</small></div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
