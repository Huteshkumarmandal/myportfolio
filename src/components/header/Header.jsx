import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial  from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hutesh Kumar Mandal</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>

        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll down</a>
        <a href="#contact" className="scroll__down">Scroll down</a>


      </div>
    </header>
  )
}

export default Header
