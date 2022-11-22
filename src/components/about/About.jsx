import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const { text } = useTypewriter({
    words: ["bout Me"],
    loop: 0,
  });

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A{text}
        <Cursor /></h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year Working Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed projects</small>
            </article>

          </div>
          <p>I have almost a decade of customer service experience. I think outside the box to come up with solutions alone and alongside a team. Have a strong creative side, which helps me be thoughtful about design and ways to make my projects user-friendly.</p>
          <a href='#contact' className='btn btn-primary'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About