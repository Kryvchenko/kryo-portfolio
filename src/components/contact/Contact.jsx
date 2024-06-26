import React, { useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Result = () => {
  return <p>Success! We will contact you soon!</p>;
};


const Contact = (props) => {
  const [result, showResult] = useState(false);

  const { text } = useTypewriter({
    words: ["ontact Me"],
    loop: 0,
  });

 

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_sqfjfxr', 'template_68jgczu', e.target, '-t72MD0QZ9b-FbbB3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>C{text}<Cursor /></h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
         <MdOutlineEmail  className='contact__option-icon'/>  
        <h4>Email</h4>
        <h5>amzkryvchenko@gmail.com</h5>
        <a href='mailto:amzkryvchenko@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
         <RiMessengerLine className='contact__option-icon'/>  
        <h4>Messenger</h4>
        <h5>Let`s stay in touch</h5>
        <a href='https://m.me/kryvchenko1' target='_blank' rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>  
        <h4>WhatsApp</h4>
        <h5>+34691328818</h5>
        <a href="https://api.whatsapp.com/send?phone+34691328818" target='_blank' rel="noreferrer">Send a message</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form  action="" onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <div>{result ? <Result /> : null}</div>
        </form>
      </div>
    </section>
  )
}

export default Contact