'use client'
import IntroCard from '@/components/IntroCard'
import React from 'react'
import luminaries from '@/data/luminaries.json';
import { useSearchParams } from 'next/navigation';
import { Text } from '@chakra-ui/react';


const Biodata = () => {

  const searchParams = useSearchParams();
  const name = decodeURIComponent(searchParams.get('name') || '');
  const person = luminaries.find(p => p.name === name);

  if (!person) {
    return <Text fontSize="xl" p={6}>No data found for {name}</Text>;
  }

  return (
    <div>
      <IntroCard
        imageUrl={person.cardImageURL}
        name={person.name}
        description={person.description}
      />
    </div>
  );
}

export default Biodata
