import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { FaUserTie } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActive] = useState('#')
  return (
   <nav>
    <a href="#"  onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
    <a href="#experience" onClick={() => setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBookOpen/></a>
    <a href="#services" onClick={() => setActive('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a>

   </nav>
  )
}

export default Nav
