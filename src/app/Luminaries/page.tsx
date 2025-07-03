import React from 'react';
import Navbar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';
import luminaries from '@/data/luminaries.json';
import { SimpleGrid } from '@chakra-ui/react';
import SelectCategory from '@/components/SelectCategory';


const Luminaries = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <Navbar/>
      <div className='w-[78%]'>
        <SelectCategory/>
      </div>      
      <div className='w-[80%]'>
      <SimpleGrid columns={[4]} gap={10} p={4}>
       { luminaries.map((person, index) => {
        return <ProfileCard key={index} {...person} />
        })}         
      </SimpleGrid>
      </div>    
    </div>
  )
}

export default Luminaries
