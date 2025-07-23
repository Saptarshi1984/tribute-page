import { useState } from 'react'
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"


const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <div>
         <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>Enter</Kbd>}>
           <Input placeholder='Ex. Swami Vivekananda' value={search} onChange={(e) => setSearch(e.target.value)} />
         </InputGroup>      
    </div>
  )
}

export default SearchBar
