'use client'

import Link from "next/link"
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import { usePathname } from "next/navigation"
import Navlink from "@/components/Navlink"



const Navbar = () => {


  const { toggleColorMode, colorMode } = useColorMode();
  const pathname = usePathname();
  

  return (
    
    <nav className="w-[100%] flex flex-row justify-around items-center !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link href = "/"       
       >Bengal Lumineries</Link>
    </div>   
    
   { /* Desktop Navigation bar. */}
    <ul className="hidden md:flex flex-row gap-4 items-center">      
      
      <Navlink
       href ="/"
       isActive={pathname ==="/"}
       >Home</Navlink>
      <Navlink href ="/People"
       isActive={pathname ==="/People"}
       >People</Navlink>
      <Navlink href ="/Culture"
       isActive={pathname ==='/Culture'}
       >Culture</Navlink>
      <Navlink href ="/Tourism"
       isActive={pathname ==='/Tourism'}
       >Tourism</Navlink>
      <Navlink href ="/LearnLanguage"
       isActive={pathname ==='/LearnLanguage'}
       >Language</Navlink>
      <Navlink href ="/About"
       isActive={pathname ==='/About'}
       >About</Navlink>      
            
    </ul>

    {/* Mobile Navigation bar. */}
    <ul className="hidden flex-col !text-2xl absolute top-7 bg-gray-800 w-[100%] z-1 opacity-80 items-center gap-4 h-screen">
      
      <Navlink
       href ="/"
       isActive={pathname ==="/"}
       >Home</Navlink>
      <Navlink href ="/People"
       isActive={pathname ==="/People"}
       >People</Navlink>
      <Navlink href ="/Culture"
       isActive={pathname ==='/Culture'}
       >Culture</Navlink>
      <Navlink href ="/Tourism"
       isActive={pathname ==='/Tourism'}
       >Tourism</Navlink>
      <Navlink href ="/LearnLanguage"
       isActive={pathname ==='/LearnLanguage'}
       >Language</Navlink>
      <Navlink href ="/About"
       isActive={pathname ==='/About'}
       >About</Navlink>      
            
    </ul>
    <div className="hidden md:block">
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode == "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
    </div>
    </nav>
  )
}

export default Navbar
