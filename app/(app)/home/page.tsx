"use client"
import MainSection from "@/components/Landing/Sections/MainSection";
import AboutUs from "@/components/Landing/Sections/AboutUs";
import HowToBuy from "@/components/Landing/Sections/HowToBuy";
import Tokenomics from "@/components/Landing/Sections/Tokenomics";
import RoadMap from "@/components/Landing/Sections/RoadMap";
import TakeToAction from "@/components/Landing/Sections/TakeToAction";
import Contact from "@/components/Landing/Sections/Contact";
export default function HomePage() {
  return (
    <main>
      <MainSection id="section1" className="mb-[0px]" />
      <AboutUs id="section2" className="mb-[0px] max-xl:mb-[100px] max-lg:mt-[140px] max-lg:mb-[220px] max-md:mt-[250px] max-md:mb-[440px] max-xs:mb-[640px]" />
      <HowToBuy id="section3" className="mb-[0px] max-lg:mt-[300px]" />
      <Tokenomics id="section4" className="mt-[40px]" />
      <RoadMap id="section5" className="mt-[40px]" />
      <TakeToAction id="section6" className="mt-[40px]" />
      <Contact id="section7" className="mt-[0px] max-lg:mt-[100px]" />
    </main>
  );
}
