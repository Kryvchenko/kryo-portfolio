import React from 'react'
import './footer.css'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>KRYO</a>

      <ul className="permalinks">
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className="footer__socials">
         <a href='https://facebook.com/kryvchenko1'><FaFacebookF /></a>
         <a href='https://instagram.com/kryv4enko?igshid=YmMyMTA2M2Y='><FiInstagram /></a>
         <a href='https://linkedin.com/in'> <FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kryo Studio. All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer
