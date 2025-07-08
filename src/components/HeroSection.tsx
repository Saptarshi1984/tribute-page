'use client'

import React from 'react';
import Image from 'next/image';
import "swiper/css";


const HeroPage = () => {

  return (

    <div>      
        <Image
              src="/oth/hero_image.png"
              alt="Responsive image"    
              fill
              className='object-cover'              
        />  
    </div>
  )
}

export default HeroPage;
