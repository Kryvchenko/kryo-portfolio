import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Kryvchenko' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href='https://facebook.com/kryvchenko1' target="_blank" rel="noreferrer"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials