import React from 'react'
import './experience.css'
import { HiMiniCheckBadge } from "react-icons/hi2";



const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skill I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>XML</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
        </div>
      </div>

{/* =======End of Front END===== */}

      <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>Node Js</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>Firebase</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>Java</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <HiMiniCheckBadge className='experience__details-icon'/>
           <div>
           <h4>XML</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
        </div>
      </div>
      </div>
    
   </section>
  )
}

export default Experience
