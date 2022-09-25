import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/rabbit.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Motorcycle shop",
    github: "https://github.com/Kryvchenko/motoshop",
    demo: "https://dynamic-sorbet-13ccb2.netlify.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Design studio",
    github: "https://github.com/Kryvchenko/kryo",
    demo: "https://kryvchenko.github.io/kryo/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Volunteering organisation",
    github: "https://github.com/Kryvchenko/save-ukraine",
    demo: "https://saveukrainelife.com/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal portfolio",
    github: "https://github.com/Kryvchenko",
    demo: "https://lytovchenko.me/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Authentic bar",
    github: "https://github.com/Kryvchenko",
    demo: "https://crazyrabbit.es"
  },
]

const Portfolio = () => {
  const { text } = useTypewriter({
    words: ["ortfolio"],
    loop: 0,
  });
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>P{text}<Cursor /></h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio