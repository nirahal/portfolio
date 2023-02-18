import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://ma.linkedin.com/in/nora-haloui-22a481b6" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/nirahal" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        
        

    </div>
  )
}

export default HeaderSocials