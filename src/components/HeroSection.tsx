'use client'

import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@chakra-ui/react';


const HeroSection = () => {

  return (

    <> 
        <AspectRatio ratio={4/2}> 
        <img
              src="/oth/hero_image.png"
              alt="Hero_image"                          
              className='object-cover'
              width='auto'
              height='auto'                                      
        /> 
        </AspectRatio>   
    </>
  )
}

export default HeroSection;
