'use client'

import Navbar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';
import luminaries from '@/data/luminaries.json';
import { SimpleGrid } from '@chakra-ui/react';
import SelectCategory from '@/components/SelectCategory';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"


const Luminaries = () => {

  const [selectedCategory, setSelectedCategory] = useState<string[]>(['all']);

  const currentCategory = selectedCategory[0];

  const FilterByCategory = (category: string) => {
    switch (category) {
      case 'literature':
      case 'science & innovations':
      case 'cinema & culture':
      case 'spirituality':
      case 'freedom fighter':
      case 'globalachivers':
      case 'law & justice':
      case 'social reformer':
        return luminaries.filter((person) => person.category.toLowerCase() === category)
          .sort((a, b) => a.name.localeCompare(b.name));

      case 'all':
      default:
        return luminaries.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
  };
  
   const filteredLuminaries = FilterByCategory(currentCategory);

  return (

    <div className='flex flex-col gap-4 items-center'>
      <Navbar/>
      <div className='flex flex-row justify-between items-center gap-4 w-[60%] m-auto'>
        <SelectCategory value={selectedCategory} onChange={setSelectedCategory} />
        <div className='w-[300px]'>     
        <InputGroup  flex="1" startElement={<LuSearch />} endElement={<Kbd>Enter</Kbd>}>
          <Input placeholder="Search Personalities" />
        </InputGroup>
        </div>
              
      </div>      
      <motion.div className='w-[80%] m-auto flex justify-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}      
      >
      <SimpleGrid columns={[4]} gap={10} p={4}>
        
        {filteredLuminaries.map((person, index) => (
            <ProfileCard key={index} {...person} />
          ))} 
                 
      </SimpleGrid>
      </motion.div>    
    </div>
  )
}

export default Luminaries;
