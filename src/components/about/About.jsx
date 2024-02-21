import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { TbAward } from "react-icons/tb";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaFolderPlus } from "react-icons/fa";




const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <TbAward className="about__icon"/>
            <h5>Experience</h5>
            <small>3+ Year Working</small>
          </article>

          <article className='about__card'>
            <AiOutlineUserSwitch className="about__icon"/>
            <h5>Client</h5>
            <small>0000+ Worldwide</small>
          </article>

          <article className='about__card'>
            <FaFolderPlus className="about__icon"/>
            <h5>Project</h5>
            <small>5+ Completed</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente natus repellat commodi veritatis, aspernatur minima alias excepturi id architecto cumque odit saepe quaerat, nesciunt officiis obcaecati facere incidunt maiores necessitatibus?
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}

export default About
