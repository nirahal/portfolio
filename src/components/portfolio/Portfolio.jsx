import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data=[
  {
    id: 1,
    image : IMG1,
    title: 'Random quote machine',
    github: 'https://github.com/nirahal/random-quote-machine.git',
    demo: 'https://nirahal.github.io/random-quote-machine/'
  },
  {
    id: 2,
    image : IMG2,
    title: 'Markdown previewer',
    github: 'https://github.com/nirahal/markdown-previewer.git',
    demo: 'https://nirahal.github.io/markdown-previewer/'
  },
  {
    id: 3,
    image : IMG3,
    title: 'Calculator',
    github: 'https://github.com/nirahal/calculatorProject.git',
    demo: 'https://nirahal.github.io/calculatorProject/'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({id, image, title, github, demo})=>{
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt="porfolio-image"></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>

          )
        })
        }
        
        

        





      </div>
    </section>
  )
}

export default Portfolio