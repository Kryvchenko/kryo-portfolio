import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import './header.css'
import HeaderSocials from './HeaderSocials'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
  const { text } = useTypewriter({
    words: ["Automation Engineer", "Cybersecurity Expert", "Developer"],
    loop: 0,
  });
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Oleksandr Kryvchenko</h1>
        <h5 className='text-light'>{text}<Cursor /></h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header