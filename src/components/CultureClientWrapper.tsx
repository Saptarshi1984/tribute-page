'use client'
import React from 'react'
import { SimpleGrid, Heading } from '@chakra-ui/react'
import DisplayCard from '@/components/DisplayCard';


interface cultureDataProps {
  id:number
  CultureName: string
  CultureImage: string
  CultureText: string
  Category: string
}

interface CultureClientDataProps {
  cultureData: cultureDataProps[];
}

const CultureClientWrapper = ({cultureData}: CultureClientDataProps)  => {   
      

  return (

      <div  className='flex flex-col justify-center items-center !my-10'>
      
      <div className='w-[65%]'>
      <Heading>Festivals</Heading>
      <SimpleGrid columns={[4]} gap={10} p={4} className='w-auto m-auto'>
      {cultureData.filter(type => type.Category == 'festivals').map((model) => (          
       <DisplayCard 
        key={model.id}
        cardName={model.CultureName}  
        cardDescription={model.CultureText}
        imageSrc={model.CultureImage}
       />      
      ))}    
      </SimpleGrid>
      </div>

      <div className='w-[65%]'>
        <Heading>Music</Heading>
      <SimpleGrid columns={[4]} gap={10} p={4} className='w-auto m-auto'>
      {cultureData.filter(type => type.Category == 'music').map((model) => (          
       <DisplayCard 
        key={model.id}
        cardName={model.CultureName}  
        cardDescription={model.CultureText}
        imageSrc={model.CultureImage}
       />      
      ))}    
      </SimpleGrid>
      </div>

      <div className='w-[65%]'>
        <Heading>Cousines</Heading>
      <SimpleGrid columns={[4]} gap={10} p={4} className='w-auto m-auto'>
      {cultureData.filter(type => type.Category == 'food').map((model) => (          
       <DisplayCard 
        key={model.id}
        cardName={model.CultureName}  
        cardDescription={model.CultureText}
        imageSrc={model.CultureImage}
       />      
      ))}    
      </SimpleGrid>
      </div>   
    </div>
  )
}

export default CultureClientWrapper