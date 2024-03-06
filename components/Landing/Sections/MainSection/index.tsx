import Image from "next/image";


import meteoriteField from "../../../../public/static/images/landing/main-section/meteorite-field.png";
import meteoriteFieldMobile from "../../../../public/static/images/landing/main-section/meteorite-field-mobile.png";
import astroDoge from "../../../../public/static/images/landing/main-section/astro-doge.png";
import meteorite1 from "../../../../public/static/images/landing/main-section/meteorite1.png";
import meteorite2 from "../../../../public/static/images/landing/main-section/meteorite2.png";
import meteorite3 from "../../../../public/static/images/landing/main-section/meteorite3.png";
import meteorite4 from "../../../../public/static/images/landing/main-section/meteorite4.png";
import meteorite5 from "../../../../public/static/images/landing/main-section/meteorite5.png";
import satellite from "../../../../public/static/images/landing/main-section/satellite.png";
import ellipse from "../../../../public/static/images/landing/main-section/ellipse.png";
import blast from "../../../../public/static/images/landing/main-section/blast.png";
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const MainSection = ({ className = "" , id }: { className?: string , id?: string }) => {
  return (
    <div
      className={`relative pt-[120px] lg:pb-[120px] max-lg:px-[10%] lg:px-[94px] w-full ${className}`} id={id}
    >
      {<div className="absolute top-0 left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden">
        <Image
          src={meteoriteField}
          alt="meteoriteField"
          className="absolute xl:top-[-180px] lg:top-[-70px] max-lg:top-[-90px] right-0 max-lg:w-[75%] max-xl:w-[35%] max-lg:hidden"
        />
        <Image
          src={meteoriteFieldMobile}
          alt="meteoriteFieldMobile"
          className="absolute top-[-20px] right-[50px] lg:hidden"
        />
        <Image
          src={astroDoge}
          alt="astroDoge"
          className="absolute xl:top-[-180px] lg:top-[-50px] max-lg:top-[-60px] xl:right-[50px] lg:right-[0] max-lg:right-[-30%] max-lg:w-[500px] max-xl:w-[35%]"
        />
        <Image
          src={meteorite1}
          alt="meteorite1"
          className="absolute xl:top-[460px] lg:top-[250px] xl:right-[420px] lg:right-[15%] max-lg:w-[25%] max-xl:w-[14%] max-lg:hidden"
        />
        <Image
          src={meteorite2}
          alt="meteorite2"
          className="absolute xl:top-[280px] lg:top-[180px] xl:right-[900px] lg:right-[30%] max-lg:w-[25%] max-xl:w-[13%] max-lg:hidden"
        />
        <Image
          src={meteorite3}
          alt="meteorite3"
          className="absolute xl:top-[80px] lg:top-[90px] xl:right-[800px] lg:right-[30%] max-lg:w-[25%] max-xl:w-[6%] max-lg:hidden"
        />
        <Image
          src={meteorite5}
          alt="meteorite5"
          className="absolute top-[300px] right-[200px] lg:hidden"
        />
        <Image
          src={satellite}
          alt="satellite"
          className="absolute top-[200px] left-0 z-[-1]"
        />
        <Image
          src={ellipse}
          alt="ellipse"
          className="absolute top-[200px] left-0 z-[-1]"
        />
      </div>}

      <div className="relative z-[-1] container">
        <div className="flex xl:px-[130px]">
          <div className="w-full max-w-[700px]">
            <p className="max-w-[355px] max-md:w-[40%] text-2xl font-extrabold leading-none text-white">
              The most astronomic memecoin in existence. AstroDoge has taken the universe in his interstellar travel.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <p className={`text-green-doge font-medium ${poppins.className}`}>Avaiable on</p>
              <Image src={blast} alt="Blast"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
