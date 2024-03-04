"use client"
// import RoadMapLine from "@/components/Landing/Sections/RoadMap/RoadMapLine";
import Image from "next/image";
import satellite from "../../../../public/static/images/landing/road-map/satellite.png";
import blast from "../../../../public/static/images/landing/road-map/blast.png";
import ellipse from "../../../../public/static/images/landing/road-map/ellipse.png";
import RoadMapLine from "./RoadMapLine";

const RoadMap = ({ className = "" , id }: { className?: string , id?: string }) => {
  return (
    <section className={`${className} pt-[100px] relative`} id={id}>
      {<div className="absolute top-[-40px] left-0 right-0 h-[2000px] z-[-9] w-full select-none pointer-events-none overflow-hidden max-lg:hidden">
        <Image
          src={satellite}
          alt="satellite"
          className="absolute top-[300px] right-0 z-[-1]"
        />
        <Image
          src={blast}
          alt="blast"
          className="absolute top-[140px] right-[100px] z-[-1]"
        />
        <Image
          src={ellipse}
          alt="blast"
          className="absolute top-0 right-0 z-[-1]"
        />
      </div>}
      <div className="lg:max-w-[897px] max-sm:max-w-[300px] max-md:max-w-[400px] max-lg:max-w-[600px] mx-auto mb-[61px] md:mb-14">
      <h1 className="text-3xl font-extrabold text-center mb-4 text-yellow-doge-500 ">
        RoadMap
      </h1>
      </div>
      <RoadMapLine />
    </section>
  );
};

export default RoadMap;
