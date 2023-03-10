import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Nora Haloui</h1>
        <h5 class="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="me">
          <img  width="200px" src={ME} alt="me"></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />

      </div>

    </header>
  )
}

export default Header