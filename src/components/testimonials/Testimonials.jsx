import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me.jpg'
import AVTR2 from '../../assets/me.jpg'
import AVTR3 from '../../assets/me.jpg'
import AVTR4 from '../../assets/me.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Sita Ram Sita RAm Sita Ram Sita Ram'
  },

  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Sita Ram Sita RAm Sita Ram Sita Ram'
  },

  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Sita Ram Sita RAm Sita Ram Sita Ram'
  },

  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Sita Ram Sita RAm Sita Ram Sita Ram'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review} </small>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>


  )
}

export default Testimonials
