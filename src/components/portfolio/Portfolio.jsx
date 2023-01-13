import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/rabbit.png'
import IMGTest1 from '../../assets/TESTIMG1.png'
import IMGTest2 from '../../assets/TESTIMG2.png'
import IMGTest3 from '../../assets/TESTIMG3.png'
import IMGTest4 from '../../assets/TESTIMG4.png'
import IMGTest5 from '../../assets/TESTIMG5.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const data = [
  {
    id: 0,
    image: IMGTest5,
    title: "Data-driven testing of IMDb website with Cypress",
    github: "https://github.com/Kryvchenko/imdb-task-cypress",
    demo: "https://github.com/Kryvchenko/imdb-task-cypress"
  },
  {
    id: 1,
    image: IMGTest1,
    title: "Google cloud calculator e2e testing",
    github: "https://github.com/Kryvchenko/webdriver-io-google-cloud-e2e",
    demo: "https://github.com/Kryvchenko/webdriver-io-google-cloud-e2e"
  },
  {
    id: 2,
    image: IMGTest2,
    title: "Cypress API Testing with JSON server",
    github: "https://github.com/Kryvchenko/cypress-api-testing",
    demo: "https://github.com/Kryvchenko/cypress-api-testing"
  },
  {
    id: 3,
    image: IMGTest3,
    title: "WebdriverIO e-commerce testing",
    github: "https://github.com/Kryvchenko/webdriverIO-ecommerce-testing",
    demo: "https://github.com/Kryvchenko/webdriverIO-ecommerce-testing"
  },
  {
    id: 4,
    image: IMGTest4,
    title: "Spotify songs recommender",
    github: "https://github.com/Kryvchenko/spotify-song-recommender-nodejs",
    demo: "https://github.com/Kryvchenko/spotify-song-recommender-nodejs"
  },
  {
    id: 5,
    image: IMG1,
    title: "Motorcycle shop",
    github: "https://github.com/Kryvchenko/motoshop",
    demo: "https://dynamic-sorbet-13ccb2.netlify.app"
  },
  {
    id: 6,
    image: IMG2,
    title: "Design studio",
    github: "https://github.com/Kryvchenko/kryo",
    demo: "https://kryvchenko.github.io/kryo/"
  },
  {
    id: 7,
    image: IMG3,
    title: "Volunteering organisation",
    github: "https://github.com/Kryvchenko/save-ukraine",
    demo: "https://saveukrainelife.com/"
  },
  {
    id: 8,
    image: IMG4,
    title: "Personal portfolio",
    github: "https://github.com/Kryvchenko",
    demo: "https://lytovchenko.me/"
  },
  {
    id: 9,
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