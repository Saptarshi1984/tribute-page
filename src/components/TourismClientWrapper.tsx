'use client'

import React from 'react'
import DisplayCard from '@/components/DisplayCard';
import { SimpleGrid } from '@chakra-ui/react';

interface TourismClientProps {

    id:number
    TourismName:string
    TourismImage:string
    TourismText:string
    }

interface TourismClientWrapperProps {
    tourismData: TourismClientProps[]
}

const TourismClientWrapper = ({tourismData}:TourismClientWrapperProps) => {


  return (
    <div>

      <div  className='flex flex-col justify-center items-center !my-10'>
      <div className='w-[65%]'>
      <SimpleGrid columns={[4]} gap={10} p={4} className='w-auto m-auto'>
      {tourismData.map((model) => (
        <DisplayCard
         key={model.id} 
         cardName={model.TourismName}
         imageSrc={model.TourismImage}
         cardDescription={model.TourismText}
        />
      ))}
      </SimpleGrid>
      </div>
    </div>
      
    </div>
  )
}

export default TourismClientWrapper