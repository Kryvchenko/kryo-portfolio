import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

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
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
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
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Lorem ipsum dolor sit amet </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services