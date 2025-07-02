import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";

export default function Home() {
  return (

    <div>
    <nav>
      <Navbar/>
    </nav>
      <main >
        <HeroPage />      
       
      </main>

    </div>
  );
}
