'use client'
import IntroCard from '@/components/IntroCard'
import React from 'react'
import luminaries from '@/data/luminaries.json';
import { useSearchParams } from 'next/navigation';
import { Text } from '@chakra-ui/react';
import Navbar from '@/components/NavBar';
import { Prose } from "@/components/ui/prose";


const Biodata = () => {

  const searchParams = useSearchParams();
  const name = decodeURIComponent(searchParams.get('name') || '');
  const person = luminaries.find(p => p.name === name);

  if (!person) {
    return <Text fontSize="xl" p={6}>No data found for {name}</Text>;
  }

  return (
    
    <div className='flex flex-col gap-4 items-center'>
      <Navbar/>
      <div>
      <IntroCard
        imageUrl={person.cardImageURL}
        name={person.name}
        description={person.description}
      />
      </div>
      <div>
        <Prose maxW='840px' border='solid 1px gray' padding='1rem' rounded='8px'  dangerouslySetInnerHTML={{ __html: person.LifeStory}} />
      </div>
    </div>
  );
}

export default Biodata
