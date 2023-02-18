import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={logo} alt="NH"></img></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://ma.linkedin.com/in/nora-haloui-22a481b6"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/nirahal"><FontAwesomeIcon icon={faGithub} /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NH.  All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer