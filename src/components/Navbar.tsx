'use client'

import { Link } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import { useRouter } from "next/navigation";




const Navbar = () => {

  const router = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div className="w-[100%] flex flex-row justify-around !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link onClick={() => router.push('/')} padding='0.6rem' href="#">Bengal Luminaries</Link>
    </div>   
    
    <div className="flex items-center">
      
      <Link onClick={() => router.push('/')} padding='0.6rem'>Home</Link>
      <Link onClick={() => router.push('/Luminaries')} padding='0.6rem' href="#">People</Link>
      <Link padding='0.6rem' href="#">Culture</Link>
      <Link padding='0.6rem' href="#">Tourism</Link>
      <Link padding='0.6rem' href="#">Language</Link>
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
