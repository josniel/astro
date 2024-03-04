"use client"
import Image from "next/image"
import Diagram from "@/components/Landing/Sections/Tokenomics/Diagram";
import blast from "../../../../public/static/images/landing/tokenomics/blast.png";
import meteorite from "../../../../public/static/images/landing/tokenomics/meteorite.png";
import meteorite2 from "../../../../public/static/images/landing/tokenomics/meteorite2.png";
import satellite from "../../../../public/static/images/landing/tokenomics/satellite.png";
import React, { useEffect, useState } from 'react';
import { tokenomics } from "@/data/tokenomics";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Función para saber el tamaño de la pantalla
function useMediaQuery(query:any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const listener = (e:any) => {
      setMatches(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [query]);
  
  return matches;
}

const Tokenomics = ({ className = "" , id }: { className?: string , id?: string }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // Estado para saber el tamaño de la pantalla
  return (
    <section className={`${className} relative`} id={id}>
      {<div className="absolute top-[-40px] left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden max-lg:hidden">
        <Image
          src={blast}
          alt="blast"
          className="absolute top-[50px] w-[250px] right-[200px] z-[-1]"
        />
        <Image
          src={meteorite}
          alt="meteorite 1"
          className="absolute top-[300px] w-[200px] right-[100px] z-[-1]"
        />
        <Image
          src={satellite}
          alt="satellite"
          className="absolute top-[40px] left-0 z-[-1]"
        />
        <Image
          src={meteorite2}
          alt="meteorite2"
          className="absolute top-[120px] w-[130px] left-[300px] z-[-1]"
        />
      </div>}
      {<div className="absolute top-0 left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden lg:hidden">
        <Image
          src={satellite}
          alt="satellite"
          className="absolute top-[400px] left-0 z-[-1]"
        />
      </div>}
      <div className="lg:max-w-[897px] max-sm:max-w-[300px] max-md:max-w-[400px] max-lg:max-w-[600px] mx-auto mb-[61px] md:mb-14">
        <h1 className="text-3xl font-extrabold text- text-center mb-4 text-yellow-doge-500">
          Tokenomics
        </h1>
      </div>
      {/* { 
        isDesktop ? 
        (<Diagram/>)
        : (<Swiper
          className="max-lg:hidden max-w-[1589px] px-5 mx-auto mt-[71px] py-auto flex gap-[600px] justify-center items-center z-[-4]"
          slidesPerView={1}
          direction="horizontal"
          loop={true}
          speed={2000}
          effect="slide"
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {tokenomics.map((tokenomic, i) => (
            <SwiperSlide key={i} className="flex flex-col gap-4 justify-center items-center my-auto z-[-4]">
              <Image className='mx-auto z-[-4]' src={tokenomic.image} alt={tokenomic.name} title={tokenomic.name} />
              <div className="border-2 border-yellow-doge-500 bg-yellow-main-op-700 text-center font-semibold rounded-3xl px-5 py-3 w-[30%] mx-auto mt-4">
                {tokenomic.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>)
      } */}
      <Diagram/>
    </section>
  );
};

export default Tokenomics;
