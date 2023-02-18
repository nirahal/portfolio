import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_vjs2c9r', 'template_9cyhmwh', form.current, 'hNTnCyySNf30nQAOa');

  e.target.reset();
};



  return (
     <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FontAwesomeIcon className="contact__option-icon" icon={faEnvelope} />
            <h4>Email</h4>
            <h5>haloui.nora0@gmail.com</h5>
            <a href="mailto:haloui.nora0@gmail.com">Send a mail</a>
          </article>
       
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>


      </div>

     </section>
  )
}

export default Contact