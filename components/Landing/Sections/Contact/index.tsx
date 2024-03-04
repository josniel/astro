"use client"
import Image from "next/image";
import Button from "@/components/UI/Button";
import Astrodoge from '../../../../public/static/images/landing/contact/decorator.svg'
import TWITTER from '/public/static/images/footer/Twitter.svg'
import TELEGRAM from '/public/static/images/footer/Telegram.svg'

const Contact = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`${className} mx-auto px-auto w-full container relative`}>
      {<div className="absolute top-[-50px] left-0 right-0 h-[500px] z-[-9] w-full select-none pointer-events-none overflow-hidden md:hidden">
        <Image
          src={Astrodoge}
          alt="Astrodoge"
          className="absolute top-0 w-[400px] right-[-100px] z-[-1]"
        />
      </div>}
      <div className="flex gap-3 lg:items-center lg:justify-center w-full px-auto mx-auto">
        <div className="flex flex-col w-[40%] gap-10 max-lg:pl-[10%]">
          <h1 className="text-3xl font-extrabold text-start mb-4 text-yellow-doge-500">
            Contact
          </h1>
          <p className="text-green-doge font-bold w-[80%] max-sm:w-[100%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora perspiciatis quas beatae suscipit dolor commodi dicta omnis quos consectetur dolores!</p>
          <div className="flex items-center gap-4">
            <Button variant="secondary">
              <Image unoptimized={true} src={TELEGRAM} alt="" width={18} height={18} />
            </Button>
            <Button variant="secondary">
              <Image unoptimized={true} src={TWITTER} alt="" width={18} height={18} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-[40%] max-md:hidden">
          <Image src={Astrodoge} alt="Astrodoge"/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
