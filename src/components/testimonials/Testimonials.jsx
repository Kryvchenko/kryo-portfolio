import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name: "Jane Nelson",
    review: "This developer was a LIFE SAVER! I had a very tight deadline (only a few hours) to get a site up for a client, and he did it in no time at all - even with my edits! I recommend him to anyone who needs a front end developer!! So easy to work with as well."
  },
  {
    avatar: AVTR2,
    name: "Egor Nesterenko",
    review: "I came to Oleksandr with a very speficic requirement which he was able to turn around and fix within a few hours. I was really impressed with the service, thank you so much for helping me."
  },
  {
    avatar: AVTR3,
    name: "Paul Decouto",
    review: "Great work. Professional. And reliable. Will use again. Looking forward to working on many more projects."
  },
  {
    avatar: AVTR4,
    name: "NGO Save Ukraine",
    review: "Incredible results. We are extremely lucky to have found Oleksandr. He is basically a member of our team because our workflows go through him and he customizes how he delivers the code to work perfectly with our team."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
>
        {data.map(({avatar, name, review},  index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar"/>
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {review}
              </small>
          </SwiperSlide>
       
          )
        }) }
       
      </Swiper>
    </section>
  )
}

export default Testimonials