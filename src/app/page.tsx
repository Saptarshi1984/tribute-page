import Navbar from "@/components/NavBar";
import HeroPage from "@/components/HeroSection";
import PeopleSection from "@/components/PeopleSection";
import CultureSection from "@/components/CultureSection";
import TourismSection from "@/components/TourismSection";
import LanguageSection from "@/components/LanguageSection";


export default function Home() {
  return (

    <div className="flex flex-col ">
    <nav>
      <Navbar/>
    </nav>
    <main >
 {/* Section 1 */}
  <section className="relative w-full " style={{ height: 'calc(100vh - 40px)' }}>
    <HeroPage />
    <div className='w-[50%] flex flex-col gap-4 absolute top-[20%] left-[10%]'>
        <h1 className='!text-4xl text-gray-900'>Tracing the legacy of Bengal’s people and culture—pillars of a nation's identity and hope.</h1>
        <p className='!text-2xl text-gray-700 text-justify'>This website is a heartfelt tribute to the remarkable minds, visionaries, and cultural heritage of Bengal. From revolutionaries and spiritual leaders to literary giants and scientific pioneers, it aims to preserve and celebrate the stories that shaped not just a region, but inspired a nation. Dive into the lives, values, and achievements of those who continue to ignite pride and purpose for generations.</p>
    </div>

  </section>

  {/* Section 2 */}
  <section className="h-screen flex items-center justify-center border-b-2 border-gray-400">
    <PeopleSection />
  </section>

  {/* Section 3 */}
  <section className="h-screen flex items-center justify-center">
    <CultureSection />
  </section>

  <section className="h-screen flex items-center justify-center">
    <TourismSection />
  </section>

  <section className="h-screen flex items-center justify-center">
    <LanguageSection />
  </section>
  </main>

  <footer>


  </footer>
    </div>
  );
}
