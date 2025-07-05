'use client'

import { Link } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import { useRouter } from "next/navigation";
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"



const Navbar = () => {

  const router = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className="w-[100%] flex flex-row justify-around !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link onClick={() => router.push('/')} padding='0.6rem' href="#">Bengal Luminaries</Link>
    </div>
    <div className=" flex justify-center !font-sans" >
        <Link onClick={() => router.push('/')} padding='0.6rem' href="#">Home</Link>
        <Link padding='0.6rem' href="#">Literature & Arts</Link>
        <Link padding='0.6rem' href="#">Science & Innovations</Link>
        <Link padding='0.6rem' href="#">Cinema & Culture</Link>
        <Link padding='0.6rem' href="#">Spiritual Leaders</Link>
        <Link padding='0.6rem' href="#">Revolutionaries</Link>
        <Link padding='0.6rem' href="#">Global Achievers</Link>                         
    </div>
    
    <div className="flex items-center">
      <div>
        <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
           <Input placeholder="Search Personalities" />
        </InputGroup>
      </div>
      <Link padding='0.6rem' href="#">About</Link> 
      <Link padding='0.6rem' href="#">Donate</Link>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode !== "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
      </ClientOnly>
      
    </div>
    </div>
  )
}

export default Navbar
