'use client'

import { useState } from 'react'
import { InputGroup, Input, Kbd, Box} from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';




const SearchBar = () => {

  const [search, setSearch] = useState('');
  return (
    
    <div className='absolute top-20'>      
      <Box
      
      p="2px"
      borderRadius="md"
      >
      <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>Enter</Kbd>}>
        <Input
         w={['xs', 'lg', '2xl', '4xl']}
          fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
         p='6'
         borderColor={'teal.800'}        
         rounded='4xl'
         _focus={{boxShadow:"none"}}
         placeholder="Search People, Festivities and Places...." />
        </InputGroup>
      </Box>      
    </div>
  )
}

export default SearchBar
