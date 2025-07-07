'use client'

import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from 'next/navigation';
import "swiper/css";


const HeroPage = () => {

  const router = useRouter();


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


  return (

    <div className='flex flex-col !gap-10 items-center !my-10'>
    
    <div className='w-[50%]  !flex'>

      <Box w="1200px" h='500px'  mx="auto" mt={10} overflow='hidden'>
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
    <div className='w-[50%] flex flex-col gap-4'>
        <h1 className='!text-4xl'>Celebrating the Minds That Shaped the World</h1>
        <p className='!text-2xl'>Bengal Luminaries is a digital tribute to the extraordinary individuals from Bengal 
        whose brilliance transcended borders. From literary giants and revolutionary thinkers 
        to visionary scientists, cinematic pioneers, and spiritual leaders — this platform chronicles 
        the lives, legacies, and global impact of Bengal's greatest minds.</p>
    </div>
       
       <Button onClick={() => router.push('/Luminaries') } >Explore Luminaries</Button>

      
         
    </div>
  )
}

export default HeroPage;
