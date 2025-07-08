'use client'

import IntroCard from '@/components/IntroCard'
import { useState } from 'react';
import luminaries from '@/data/luminaries.json';
import { useSearchParams } from 'next/navigation';
import { Text, Tabs } from '@chakra-ui/react';
import Navbar from '@/components/NavBar';
import { Prose } from "@/components/ui/prose";


const Biodata = () => {

  const [currentTab, setCurrentTab] = useState<string | 'null'>('first');
  const searchParams = useSearchParams();
  const name = decodeURIComponent(searchParams.get('name') || '');
  const person = luminaries.find(p => p.name === name);



  if (!person) {
    return <Text fontSize="xl" p={6}>No data found for {name}</Text>;
  }

  return (
    
    <div className='flex flex-col gap-4 items-center'>
      <Navbar/>
      <div className='flex flex-col gap-4'>
      <IntroCard
        imageUrl={person.cardImageURL}
        name={person.name}
        description={person.description}
      />
      <div>
        <Tabs.Root value={currentTab} onValueChange={(e) => setCurrentTab(e.value)}>
          <Tabs.List>
        <Tabs.Trigger value="first">Short Biography</Tabs.Trigger>
        <Tabs.Trigger value="second">Gallery</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">        

        <Prose maxW='840px' border='solid 1px gray' padding='1rem' rounded='8px'  dangerouslySetInnerHTML={{ __html: person.LifeStory}} />

      </Tabs.Content>
      <Tabs.Content value="second">Second panel</Tabs.Content>
      </Tabs.Root>
        </div>   
        
      </div>
    </div>
  );
}

export default Biodata
