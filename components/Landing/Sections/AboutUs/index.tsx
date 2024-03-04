import Image from "next/image";
import { useState } from "react";


import astroDoge from "../../../../public/static/images/landing/about-us/astrodoge.png";
import astroDoge2 from "../../../../public/static/images/landing/about-us/astrodoge2.png";
import meteorite from "../../../../public/static/images/landing/about-us/meteorite.png";
import box from "../../../../public/static/images/landing/about-us/box.png";

const AboutUs = ({ className = "" , id }: { className?: string , id?: string }) => {
  const [ isHover, setIsHover ] = useState(false);
  return (
    <div
      className={`relative pt-[120px] lg:pb-[120px] max-lg:px-[54px] lg:px-[94px] max-md:flex max-md:flex-col ${className}`} id={id}
    >
      {<div className="absolute top-0 left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden max-lg:hidden">
        <Image
          src={meteorite}
          alt="Spring 1"
          className="absolute top-[440px] w-[120px] left-0 z-[-1]"
        />
      </div>}

      <div className="container relative flex max-xl:flex-col items-center justify-center max-xl:mx-auto">
        <div className="max-xl:w-[100%] w-[50%] max-xl:mx-auto max-xl:mt-[-200px] flex justify-center" id="astro-main" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <Image src={astroDoge2} className="w-[500px]" alt="AstroDoge2" id="astro2"/>
          <Image src={astroDoge} className="w-[500px]" alt="AstroDoge" id="astro"/>
          {/* {isHover ? (
            ):(
          )} */}
        </div>
        <div className="max-xl:w-[100%] w-[50%] flex flex-col justify-center gap-4">
          <h1 className="text-yellow-doge-500 font-extrabold text-3xl max-xl:text-center mt-[-180px] max-xl:mt-[-30px]">Astrodoge</h1>
          <div className="box w-[40%] max-xl:w-[100%] mt-4 max-xl:mt-[220px] max-sm:mt-[240px] max-xs:mt-[150px] py-[8] text-white text-center items-center flex flex-col">
            <div className="flex flex-col gap-3 z-[4] text-green-doge mt-4 font-bold text-justify mx-8 my-8">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos deleniti voluptatum excepturi earum, iste, neque tempora libero in magnam velit. Delectus ex obcaecati, dolorum labore!</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos deleniti voluptatum excepturi earum, iste, neque tempora libero in magnam velit. Delectus ex obcaecati, dolorum labore!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
