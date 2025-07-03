import Image from "next/image";
import Navbar from "@/components/NavBar";
import HeroPage from "@/components/HeroSection";

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
