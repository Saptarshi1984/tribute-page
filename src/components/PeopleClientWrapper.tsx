'use client'

import React, { useState } from 'react'
import ProfileCard from './ProfileCard';
import { createListCollection, SimpleGrid } from '@chakra-ui/react';
import SelectCategory from './SelectCategory';
import SearchBar from './SearchBar';

const peopleCategories = createListCollection({
      
    items: [
    { label: "All", value: "all" },
    { label: "Literature & Arts", value: "literature" },
    { label: "Science & Innovations", value: "science & innovations" },
    { label: "Cinema & Culture", value: "cinema & culture" },
    { label: "Spirituality", value: "spirituality" },
    { label: "Freedom Fighter", value: "freedom fighter" },
    { label: "Global Achivers", value: "globalachivers" },
    { label: "Law & Justice", value: "law & justice" },
    { label: "Social Reformer", value: "social reformer" },
  ]

})


interface luminariesDataProps {
  id:number
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
    <div>
      <SelectCategory  value={selected} onChange={setSelected} collection={peopleCategories} />
    </div>
    <div className='w-auto'>
    <SimpleGrid 
    columns={{ base: 1, sm: 1, md: 2, lg: 3, xl:4  }}  
    gap={10} 
    p={4} 
    className='w-auto m-auto '>
       { filteredLuminaries.map((model) => (
      
       <ProfileCard
       key = {model.id}
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
