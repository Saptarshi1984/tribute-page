import { Link } from "@chakra-ui/react";




const Navbar = () => {
  return (
    <div className="w-[100%] flex flex-row justify-around !border-b-1 !border-b-gray-400">
    <div className="!font-serif !font-semibold !text-xl">
      <Link color='#2B2118' padding='0.6rem' href="#">Bengal Luminaries</Link>
    </div>
    <div className=" flex justify-center !font-sans" >
        <Link color='#2B2118' padding='0.6rem' href="#">Home</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Literature & Arts</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Science & Innovations</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Cinema & Culture</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Spiritual Leaders</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Revolutionaries</Link>
        <Link color='#2B2118' padding='0.6rem' href="#">Global Achievers</Link>                         
    </div>
    <div>
      <Link color='#2B2118' padding='0.6rem' href="#">About</Link> 
      <Link color='#2B2118' padding='0.6rem' href="#">Donate</Link>
      
    </div>
    </div>
  )
}

export default Navbar
