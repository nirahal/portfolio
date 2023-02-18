import React from 'react'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBookBookmark, faHands, faMessage } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active"><FontAwesomeIcon icon={faHouse} /></a>
      <a href="#about"><FontAwesomeIcon icon={faUser} /></a>
      <a href="#experience"><FontAwesomeIcon icon={faBookBookmark} /></a>
      <a href="#services"><FontAwesomeIcon icon={faHands} /></a>
      <a href="#contact"><FontAwesomeIcon icon={faMessage} /></a>
    </nav>
  )
}

export default Nav