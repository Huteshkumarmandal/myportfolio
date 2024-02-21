import React from 'react'
import './footer.css'
import { ImFacebook } from "react-icons/im";
import { TfiInstagram } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>HKM</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="experience">Expeirence</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>

    <div className='footer__socials'>
      <a href="https://facebook.com"><ImFacebook/></a>
      <a href="https://instagram.com"><TfiInstagram/></a>
      <a href="https://twitter.com"><FaTwitter/></a>
    </div>

    <div className='footer__copyright'>
      <small>&copy; Hutesh....</small>
    </div>


  </footer>
  )
}

export default Footer
