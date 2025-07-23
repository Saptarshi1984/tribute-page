'use client'
import React from 'react'
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ButttonPrimary from './ButttonPrimary';

const images = [
  '/oth/kolkata_city.png',
  '/oth/visit_darjeeling.png',
  '/oth/visit_sunderbans.png',
  '/oth/visit_bishnupur.png',
  '/oth/visit_murshidabad.png',
  '/oth/visit_tarapith.png'
];

const TourismSection = () => {
  return (

        <div className='w-auto !flex flex-col !justify-around items-center h-screen'>
        <h1 className='!text-4xl sm:!text-8xl'>Places you must visit.</h1>
        <p className='w-100 sm:w-[50%] !text-2xl text-gray-400 text-justify !mx-4'>West Bengal offers a rich tapestry of 
            tourist destinations that reflect its deep cultural heritage and historical legacy. From the 
            colonial charm of Kolkata with its grand architecture and literary past, to the spiritual serenity 
            of Kalimpong and Darjeeling nestled in the Himalayas, Bengal has something for every traveler. The 
            Sundarbans, home to the majestic Royal Bengal Tiger, showcases nature’s untamed beauty, while the 
            terracotta temples of Bishnupur highlight ancient art and craftsmanship. Shantiniketan, founded by 
            Rabindranath Tagore, remains a cultural beacon of learning and creativity. Whether it's the vibrant 
            Durga Puja celebrations or the peaceful riverine landscapes of Murshidabad and Malda, Bengal’s 
            tourist spots offer an immersive journey into the soul of Bengal’s history, art, and spiritual 
            essence.</p>
            
            <div className='w-100 sm:w-[100%]'>
            <Box w="1200px" h='auto'  mx="auto" mt={10} overflow='hidden'>
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 0, disableOnInteraction: false,}}
                    loop={true}      
                    speed={4000}        
                    spaceBetween={8}
                    slidesPerView={3}
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img src={src} alt={`slide-${index}`} style={{ width: "100%", height: '100%',  objectFit: 'cover',borderRadius: "8px", overflow: 'hidden' }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              </div>
                <ButttonPrimary btnText='Explore Places' src='/Tourism' />
        </div>
  )
}

export default TourismSection
