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
            <h3>Security</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon '/>
            <p>IS Audit </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Dependencies updates </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>IAM </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Security framework development </p>
            </li>
          </ul>
        </article>
        {/* Manual testing  */}
        <article className='service'>
          <div className='service__head'>
            <h3>Quality Assurance</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon '/>
            <p>Test strategy creation</p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Test data generation</p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Testing environment maintenance </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Defects identification </p>
            </li>
            <li><BiCheck className='service__list-icon '/>
            <p>Test Automation framework development </p>
            </li>
          </ul>
        </article>
        {/* END OF QA*/}
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
            <p>Web hosting </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
     
      </div>
    </section>
  )
}

export default Services