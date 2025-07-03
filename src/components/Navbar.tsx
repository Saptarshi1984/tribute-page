'use client'

import { Link } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"




const Navbar = () => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className="w-[100%] flex flex-row justify-around !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link padding='0.6rem' href="#">Bengal Luminaries</Link>
    </div>
    <div className=" flex justify-center !font-sans" >
        <Link padding='0.6rem' href="#">Home</Link>
        <Link padding='0.6rem' href="#">Literature & Arts</Link>
        <Link padding='0.6rem' href="#">Science & Innovations</Link>
        <Link padding='0.6rem' href="#">Cinema & Culture</Link>
        <Link padding='0.6rem' href="#">Spiritual Leaders</Link>
        <Link padding='0.6rem' href="#">Revolutionaries</Link>
        <Link padding='0.6rem' href="#">Global Achievers</Link>                         
    </div>
    <div>  

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
