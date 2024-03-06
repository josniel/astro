"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ConnectYourWalletComponent from '@/components/WalletSelection/ConnectYourWallet';
import astroDoge from "../../public/static/images/connectWallet/astrodoge.png";
import Meteorites from "../../public/static/images/connectWallet/meteorites.png";
import Meteorite from "../../public/static/images/connectWallet/meteorite.png";
import Meteorite2 from "../../public/static/images/connectWallet/meteorite2.png";
import Meteorite3 from "../../public/static/images/connectWallet/meteorite3.png";
import Satellite from "../../public/static/images/connectWallet/satellite.png";
import AstroDoge from "../../public/static/images/Logo.png"
import { LogoHeader } from "@/components/Logo";

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
export default function ConnectYourWallet() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  return (
    <main className='h-full'>
      {<div className="absolute top-0 left-0 right-0 h-[100%] z-[-9] w-full select-none pointer-events-none overflow-hidden">
        <Image
          src={Meteorites}
          alt="meteoriteField"
          className="absolute lg:top-0 max-lg:top-[700px] right-0 w-[40%] max-lg:w-[80%]"
        />
        <Image
          src={Satellite}
          alt="meteoriteField"
          className="absolute top-0 left-0 w-[30%] max-lg:w-[50%]"
        />
        <Image
          src={Meteorite2}
          alt="meteoriteField"
          className="absolute top-[700px] left-0 w-[10%] max-lg:hidden"
        />
      </div>}
      {<div className="absolute top-0 left-0 right-0 h-[100%] z-[100] w-full select-none pointer-events-none overflow-hidden">
        <Image
          src={Meteorite3}
          alt="meteoriteFieldMobile"
          className="absolute top-[280px] right-0 z-[150] lg:hidden"
        />
      </div>}
      <div className="flex items-center w-full max-w-[1800px] relative justify-center mx-auto py-auto h-[100%]">
        <div className={`flex flex-col max-lg:w-[100%] w-[50%] justify-center items-end max-lg:items-center gap-4 h-full`}>
          <div className='flex justify-between items-center relative z-[11] top-[-340px] left-[90px] w-[90%] max-lg:hidden'>
            <div className="flex items-center space-x-4 z-10">
              <Image src={AstroDoge} alt="AstroDoge"/>
              <div className="flex items-center font-black">
                <h1 className="text-white text-3xl">ASTRO</h1>
                <h1 className="text-yellow-doge-500 text-3xl">DOGE</h1>
              </div>
            </div>
            <Image src={Meteorite} alt="Meteorite" className='w-[180px]'/>
          </div>
          <div className={`${isDesktop ? 'boxConnect' : 'boxConnectMobile'} w-[40%] py-5 px-4 max-lg:w-[90%] flex flex-col`}>
            <ConnectYourWalletComponent setIsConnecting={setIsConnecting} />
          </div>
        </div>
        <div className="max-lg:w-[100%] w-[50%] h-[100%] flex flex-col justify-center items-center max-lg:hidden">
          <Image src={astroDoge} className="w-[600px]" alt="astroDoge"/>
        </div>
      </div>
    </main>
  );
}
