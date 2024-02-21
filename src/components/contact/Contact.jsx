import React, { useRef } from 'react'
import './contact.css'

import { MdOutlineAttachEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

import emailjs from '@emailjs/browser';



 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tvaiuzo', 'template_uj6xm5h', form.current, 'bohnPdiRrK2oa-W3l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };




  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAttachEmail className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>hutesh77@gmail.com</h5>
            <a href="mailto:mandalhutesh0@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill  className='contact__option-icon'/>

            <h4>Messenger</h4>
            <h5>Hutesh Kumar Mandal</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp  className='contact__option-icon'/>

            <h4>Whatsapp</h4>
            <h5>9819078039</h5>
            <a href="https://api.whatsapp.com/send?phone+9779819078039" target="_blank">Send a message</a>
          </article>
        </div>
        {/* ====End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
