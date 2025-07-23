'use client'

import React from 'react'
import { Box} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ButttonPrimary from './ButttonPrimary';
import "swiper/css";

  const images = [
  "/images/rabindra_nath_tagore.jpg",
  "/images/swami_vivekananda.jpg",  
  "/images/satyajit_ray.jpg",
  "/images/jagadis_bose.jpg",
  "/images/aurobindo_ghosh.jpg",
  "/images/subhash_bose.jpg",
  "/images/satyen_bose.jpg",
  "/images/ramakrishna.jpg"
];

const PeopleSection = () => {


  return (
    <>
        <div className='!flex !flex-col !mx-4 gap-6 !justify-evenly items-center h-screen sm:!gap-8  '>
        <h1 className='!text-4xl sm:!text-8xl'>Peoples of Bengal</h1>
        <p className='w-100 sm:w-[50%] !text-2xl text-gray-400 text-justify '>Bengal Luminaries is a digital tribute to the extraordinary individuals from Bengal 
        whose brilliance transcended borders. From literary giants and revolutionary thinkers 
        to visionary scientists, cinematic pioneers, and spiritual leaders — this platform chronicles 
        the lives, legacies, and global impact of Bengal's greatest minds.</p>
     <div className='aspect-square'>
      <Box maxW="1200px" maxH='500px'  mx="auto" mt={10} overflow='hidden'>
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
    <div>        
        <ButttonPrimary btnText='Explore Luminaries' src='/People' />
    </div>
     
    </div>

       
       
      
    </>
  )
}

export default PeopleSection
