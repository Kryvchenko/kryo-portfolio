import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Services = () => {
  const { text } = useTypewriter({
    words: ["ervices"],
    loop: 0,
  });
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>S{text}<Cursor /></h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon '/>
            <p>Prototyping, wireframing, user flows, mockups </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Visual design </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>User research and usability testing </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Information architecture  </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon '/>
            <p>Responsive web applications </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Search engine optimization</p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Automated system tests </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Scalable, secure, maintainable code </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Web hosting </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation </h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon '/>
            <p>Research</p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Photography and Video </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Text content creation </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Metrics and analytics support </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services