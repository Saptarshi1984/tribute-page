import HeroSection from "@/components/HeroSection";
import PeopleSection from "@/components/PeopleSection";
import CultureSection from "@/components/CultureSection";
import TourismSection from "@/components/TourismSection";
import LanguageSection from "@/components/LanguageSection";
import SearchBar from "@/components/SearchBar";



export default function Home() {
  return (

  <>    
        
  <main className="w-screen h-screen !flex !flex-col !items-center justify-center">
    <SearchBar />
    <HeroSection /> 
  </main>

    </>
  );
}
