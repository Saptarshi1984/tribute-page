'use client'


import Link from "next/link"
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import { useRouter } from "next/navigation";




const Navbar = () => {

  const router = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    
    <nav className="w-[100%] flex flex-row justify-around !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link  href="/">Bengal Luminaries</Link>
    </div>   
    
    <div className="flex flex-row gap-2 items-center">
      
      <Link  href="/">Home</Link>
      <Link  href="/Luminaries">People</Link>
      <Link  href="/Culture">Culture</Link>
      <Link  href="/Tourism">Tourism</Link>
      <Link  href="/LearnBengali">Language</Link>
      <Link  href="/About">About</Link> 
      <Link  href="/Donate">Donate</Link>
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
