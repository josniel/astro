'use client';
import { LogoHeader } from "@/components/Logo";
import HeaderRectangle from "../../../public/static/images/RectangleHeader.png";
import HeaderRectangleMobile from "../../../public/static/images/RectangleHeaderMobile.png";
import MenuLine from "@/components/UI/Icons/MenuLine";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

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

const HeaderBase = ({ children }: { children?: React.ReactNode }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <header className="flex flex-col mx-auto w-[100%]">
      <div className="w-[90%] mx-auto mt-5 flex justify-center">
        <div className="w-[calc(100%-20px)] max-w-[1820px] fixed z-[10]">
          <div className="absolute top-0 z-9 w-[100%] max-w-[1820px]">
            {isDesktop? (
              <Image unoptimized={true} src={HeaderRectangle} alt="Header Rectangle" className="bg-opacity-30 backdrop-blur-[5px] mx-auto w-[100%] max-w-[1820px] h-[100px]"/>
              ) : (
              <Image unoptimized={true} src={HeaderRectangleMobile} alt="Header Rectangle" className="bg-opacity-30 backdrop-blur-[5px] mx-auto w-[90%] h-[100px]"/>
            )}
            {/* <Image unoptimized={true} src={HeaderRectangle} alt="Header Rectangle" className="bg-opacity-30 backdrop-blur-[5px] mx-auto w-[100%] h-[100px]"/> */}
          </div>
          <div className="w-[100%] !p-[18px] md:!pt-[14px] md:!pb-[31px] flex items-center z-10 max-lg:justify-around max-lg:mx-[10px]">
            <div className="flex items-center space-x-4 xl:w-[55%] lg:w-[44%] max-lg:w-auto z-10">
              <LogoHeader />
              <div className="flex items-center font-black">
                <h1 className="text-white text-3xl">ASTRO</h1>
                <h1 className="text-yellow-doge-500 text-3xl">DOGE</h1>
              </div>
            </div>
            {children}
          </div>
          {/* <div className="mx-auto max-w-[1500px] !p-[18px] md:!pt-[14px] md:!pb-[31px] flex items-center relative z-10 max-lg:justify-between max-lg:mx-[50px]">
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderBase;
