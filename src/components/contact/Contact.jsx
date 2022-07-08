import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset()

    emailjs.sendForm('service_sqfjfxr', 'template_68jgczu', form.current, '-t72MD0QZ9b-FbbB3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
         <MdOutlineEmail  className='contact__option-icon'/>  
        <h4>Email</h4>
        <h5>amzkryvchenko@gmail.com</h5>
        <a href='mailto:amzkryvchenko@gmail.com' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
         <RiMessengerLine className='contact__option-icon'/>  
        <h4>Messenger</h4>
        <h5>Let`s stay in touch</h5>
        <a href='https://m.me/kryvchenko1' target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>  
        <h4>WhatsApp</h4>
        <h5>+14415188919</h5>
        <a href="https://api.whatsapp.com/send?phone+14415188919" target='_blank'>Send a message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form}  onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact