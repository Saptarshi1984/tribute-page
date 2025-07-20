'use client'

import React, { useState } from 'react'
import ProfileCard from './ProfileCard';
import { SimpleGrid } from '@chakra-ui/react';
import SelectCategory from './SelectCategory';
import SearchBar from './SearchBar';


interface luminariesDataProps {
  name: string;
  cardImageURL: string;
  description: string;
  category: string;
  slug:string;
}

interface PeopleClientWrapperProps {

  luminariesData: luminariesDataProps[];

}

const PeopleClientWrapper = ({luminariesData}:PeopleClientWrapperProps) => {

   const [selected, setSelected] = useState<string[]>(['all']);
   const filteredLuminaries= selected.includes('all') ? luminariesData
         : luminariesData.filter((person) => selected.includes(person.category.toLowerCase()));

  return (

    <div className='flex flex-col justify-center items-center !my-10'>

    <div className='w-[65%] flex flex-row justify-between items-center'>
      <SelectCategory value={selected} onChange={setSelected} />
      <SearchBar />
    </div>
    <div className='w-auto'>
    <SimpleGrid columns={[4]} gap={10} p={4} className='w-auto m-auto'>
       { filteredLuminaries.map((model, i) => (
      
       <ProfileCard
       key = {i}
       slug = {model.slug} 
       cardImageURL= {model.cardImageURL}
       name= {model.name}
       description={model.description}
       category= {model.category}
       />       
       ))}
    </SimpleGrid>
    </div>    
</div>
    
  )
}

export default PeopleClientWrapper
