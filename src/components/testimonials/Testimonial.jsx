import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const data = [
    {
      id:1,
      avatar:AVTR1,
      name: 'Kristen ',
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum minus, voluptas nam quibusdam minima amet exercitationem commodi eum aliquid tenetur quam pariatur nobis incidunt voluptates in. Adipisci eveniet voluptatibus perspiciatis sunt
       Pariatur quae dolor officiis quibusdam hic laudantium autem`
    },
    {
      id:2,
      avatar:AVTR2,
      name: 'Ernest Achiver',
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum minus, voluptas nam quibusdam minima amet exercitationem commodi eum aliquid tenetur quam pariatur nobis incidunt voluptates in. Adipisci eveniet voluptatibus perspiciatis sunt
       Pariatur quae dolor officiis quibusdam hic laudantium autem`
    },
    {
      id:3,
      avatar:AVTR3,
      name: 'John Doe',
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum minus, voluptas nam quibusdam minima amet exercitationem commodi eum aliquid tenetur quam pariatur nobis incidunt voluptates in. Adipisci eveniet voluptatibus perspiciatis sunt
       Pariatur quae dolor officiis quibusdam hic laudantium autem`
    },
    {
      id:4,
      avatar:AVTR4,
      name: 'Samina',
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum minus, voluptas nam quibusdam minima amet exercitationem commodi eum aliquid tenetur quam pariatur nobis incidunt voluptates in. Adipisci eveniet voluptatibus perspiciatis sunt
       Pariatur quae dolor officiis quibusdam hic laudantium autem`
    }
  ]
  return (
    <section id="testimonials">
        <h5>Review from client</h5>
        <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
        {data.map(item => {
          return (
            <SwiperSlide key={item?.id} className="testimonial">
            <div className="clients_avatar">
              <img src={item?.avatar} alt='avatar one'/>
            </div>
            <h5 className='clent__name'>
              {item?.name}
              </h5>
              <small className='client__review'>
                 {item?.review}
              </small>
          </SwiperSlide>
          )
        })}
    
      </Swiper>
    </section>
  )
}

export default Testimonial