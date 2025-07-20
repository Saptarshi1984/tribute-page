'use client'

import {useState} from 'react'
import { Tabs } from '@chakra-ui/react'
import { Prose } from "@/components/ui/prose"
import IntroCard from '@/components/IntroCard'

interface Person {
  name: string;
  slug: string;
  cardImageURL: string;
  description: string;
  LifeStory: string;
}

interface PeopleDetailsClientWrapperProps {
  person: Person;
}

const PeopleDetailsClientWrapper =  ({person}:PeopleDetailsClientWrapperProps) => {

     const [currentTab, setCurrentTab] = useState<string | 'null'>('first');

  return (

      <div className='flex flex-col gap-4 items-center'>
      
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

        <Prose maxW='840px' border='solid 1px gray' padding='1rem' rounded='8px'  dangerouslySetInnerHTML={{ __html: person.LifeStory as string}} />

      </Tabs.Content>
      <Tabs.Content value="second">You are in Gallery.</Tabs.Content>
      </Tabs.Root>
        </div>   
        
      </div>
    </div>
  )
}

export default PeopleDetailsClientWrapper
