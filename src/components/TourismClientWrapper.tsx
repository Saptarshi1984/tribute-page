'use client'

import react, {useState} from 'react'
import DisplayCard from '@/components/DisplayCard';
import SelectCategory from './SelectCategory';
import { createListCollection, SimpleGrid } from '@chakra-ui/react';

const tourismCategories = createListCollection({
      
    items: [
    { label: "All", value: "all" },
    { label: "Most Popular Places", value: "most popular places" },
    { label: "Beaches", value: "beaches" },
    { label: "In the City", value: "in the city" },

  ]

})

interface TourismClientProps {

    id:number
    TourismName:string
    TourismImage:string
    TourismText:string
    TourismCategory: string
    }

interface TourismClientWrapperProps {
    tourismData: TourismClientProps[]
}

const TourismClientWrapper = ({tourismData}:TourismClientWrapperProps) => {

      const [selected, setSelected] = useState<string[]>(['all']);
      
      const filteredData= selected.includes('all') ? tourismData
         : tourismData.filter((person) => selected.includes(person.TourismCategory.toLowerCase()));

  return (    

      <div  className='flex flex-col justify-center items-center !my-10 '>
      <div>
      <SelectCategory value={selected} onChange={setSelected} collection={tourismCategories} />
      
      </div>
      <div className='w-auto'>
      <SimpleGrid 
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl:4 }}  
      gap={10} 
      p={4} className='w-auto m-auto'>
      {filteredData.map((model) => (
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
      
    
  )
}

export default TourismClientWrapper