'use client'

import React from 'react';
import ButttonPrimary from './ButttonPrimary';
import { Heading } from '@chakra-ui/react';
import { Prose } from './ui/prose';


const HeroSection = () => {

  return (
      <div className='flex flex-col gap-10 items-center justify-center w-[100%]'>
        <Heading className='!text-xl !font-semibold text-justify sm:!text-2xl md:!text-4xl lg:!text-6xl xl:!text-8xl'>Celebrating the Spirit of <span id='bengalText'>Bengal</span></Heading>
        <Prose className='w-80 text-justify !text-sm sm:w-[40%] sm:!text-2xl md:w-[80%] '>This website is a heartfelt tribute to the remarkable minds, visionaries, and cultural heritage of Bengal. From revolutionaries and spiritual leaders to literary giants and scientific pioneers, it aims to preserve and celebrate the stories that shaped not just a region, but inspired a nation. Dive into the lives, values, and achievements of those who continue to ignite pride and purpose for generations.</Prose>
        <div className='flex sm:flex-row gap-8'>
        <ButttonPrimary btnText='People' src='/People'/>
        <ButttonPrimary btnText='Culture' src='/Culture' />
        <ButttonPrimary btnText='Tourism' src='/Tourism' />
        </div>
      </div> 
  )
}

export default HeroSection;
