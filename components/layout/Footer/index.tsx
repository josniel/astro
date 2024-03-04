"use client";

import Image from "next/image";
import { LogoFooter } from "@/components/Logo";
import { NavbarLanding } from "@/components/layout/Utils/Navbar";
import Disclaimer from "@/components/Disclaimer";
import HeaderRectangle from "../../../public/static/images/RectangleHeader.png";
import footerBox from "../../../public/static/images/footer/footerBox.svg";
import blast from "../../../public/static/images/footer/blast.png";

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


import useIsMobile from "@/hooks/useIsMobile";
import Button from "@/components/UI/Button";

import NavigationMobile from "./NavigationMobile";
import DISCORD from '/public/static/images/footer/Discord.svg'
import TWITTER from '/public/static/images/footer/Twitter.svg'
import GITBOOK from '/public/static/images/footer/GitBook.svg'
import GECKO from '/public/static/images/footer/Gecko.svg'
import MEDIUM from '/public/static/images/footer/Medium.svg'
import TELEGRAM from '/public/static/images/footer/Telegram.svg'
import EAGLE from '/public/static/images/footer/Eagle.svg'
import SymmioLogo from '/public/static/images/footer/symmio-icon.svg'
const OPTIONS = [
  {
    image: TWITTER,
    link: '#',
  },
  {
    image: DISCORD,
    link: '#',
  },
  {
    image: MEDIUM,
    link: '#',
  },
  {
    image: GITBOOK,
    link: '#',
  },
  {
    image: TELEGRAM,
    link: '#',
  },
]
export const FooterLanding = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <footer className="flex flex-col w-[100%]">
      {
        !isMobile ? (
          <div className="w-full mx-auto mt-5 flex justify-center">
            <div className="relative bottom-0 max-w-[1820px] max-xl:h-[100px] mt-5 z-[10] w-[calc(100%-20px)]">
              <div className="absolute w-[100%] max-w-[1820px] bottom-0 max-md:bottom-[-100px] z-10">
                {
                  isMobile ? (
                    <Image unoptimized={true} src={footerBox} alt="Header Rectangle" className="w-[100%] max-w-[1820px] bg-opacity-30 backdrop-blur-[5px]"/>
                  ) : (
                    <Image unoptimized={true} src={HeaderRectangle} alt="Header Rectangle" className="w-[100%] max-w-[1820px] bg-opacity-30 backdrop-blur-[5px] h-[100px] max-xl:h-[140px] transform rotate-180"/>
                  )
                }
              </div>
              <div className="mx-auto w-[100%] !p-[18px] lg:pt-[8px] md:mt-[-30px] lg:mt-[-30px] pb-[60px] max-lg:pb-[100px] flex max-md:flex-col items-center relative md:justify-between z-10 gap-3 max-md:mt-[-100px]">
                <div className="flex items-center gap-4 justify-center md:hidden">
                  <div className="text-white text-2xl items-center flex font-extrabold">Astrodoge</div>
                  <div className="border-l border-green-doge4 h-5"></div>
                  <div className="flex items-center gap-2">
                    <p className="text-green-doge font-medium">Avaiable on</p>
                    <Image src={blast} alt="Blast"/>
                  </div>
                </div>
                <NavbarLanding isFooter={true}/>
                <div className="flex items-center gap-3 w-[28%] max-md:hidden">
                  <LogoFooter />
                  <div className="flex items-center font-black">
                    <h1 className="text-white text-3xl">ASTRO</h1>
                    <h1 className="text-yellow-doge-500 text-3xl">DOGE</h1>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {OPTIONS.map((option, index) => (
                    <Button key={index} variant="secondary">
                      <Image unoptimized={true} src={option.image} alt="" width={22} height={22} />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="footer relative mt-5 z-[10] w-[90%] mx-auto">
            <div className="flex flex-col z-[4] mb-[65px] mt-[20px] mx-auto">
              <div className="flex items-center gap-4 justify-center px-2">
                <div className="text-white text-2xl items-center flex font-extrabold">Astrodoge</div>
                <div className="border-l border-green-doge4 h-5"></div>
                <div className="flex items-center gap-1">
                  <p className="text-green-doge font-medium">Avaiable on</p>
                  <Image src={blast} alt="Blast"/>
                </div>
              </div>
              <NavbarLanding isFooter={true}/>
              <div className="flex items-center gap-3 w-[28%] max-md:hidden">
                <LogoFooter />
                <div className="flex items-center font-black">
                  <h1 className="text-white text-3xl">ASTRO</h1>
                  <h1 className="text-yellow-doge-500 text-3xl">DOGE</h1>
                </div>
              </div>
              <div className="flex items-center justify-center mx-auto gap-3">
                {OPTIONS.map((option, index) => (
                  <Button key={index} variant="secondary">
                    <Image unoptimized={true} src={option.image} alt="" width={22} height={22} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )
      }
      <div className="flex mx-auto items-center mt-[-20px] max-lg:mt-[30px] justify-between max-lg:justify-center relative w-[90%] z-10 ">
        <div className="text-green-doge3 font-normal">2024 © ASTRODOGE</div>
        <Disclaimer />
        <div className="flex items-center gap-2 mt-3 max-lg:hidden">
          <p className="text-green-doge font-medium">Avaiable on</p>
          <Image src={blast} alt="Blast"/>
        </div>
      </div>
    </footer>
  );
};

