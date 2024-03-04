import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MenuMobileLink from "@/components/MenuMobile/MenuMobileLink";
import Button from "@/components/UI/Button";
import mainArrow from "../../public/static/images/buttons/main-arrow.svg";
import MenuLine from "@/components/UI/Icons/MenuLine";
import CircleClose from "@/components/UI/Icons/CircleClose";
import GoTo from "@/components/UI/Icons/GoTo";
import Close from "@/components/UI/Icons/Close";
import ChevronUpRight from "@/components/UI/Icons/ChevronUpRight";

import SelectorAccoundHandler from "@/components/layout/Utils/SelectorAccoundHandler";
import SelectorAccoundHandlerSmall from "@/components/layout/Utils/SelectorAccoundHandler/SelectorAccoundHandlerSmall";

import ComponentVisible from "@/hooks/useVisible";

import {
  discordLink,
  twitterLink,
  telegramLink,
  mediumLink,
  gitBookLink,
} from "@/data/social";
import { menuLinksLanding, menuLinksApp } from "@/data/menuLinks";

export const MenuMobileLanding = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);
  const links = useMemo(
    () => menuLinksLanding.filter((link) => link.subLinks),
    []
  );

  return (
      // aria-label={isVisible ? "Close menu" : "Open menu"}
    <div className="lg:hidden flex gap-2.5" ref={ref}>
      <button
        type="button"
        className={`btn w-[35px] h-[34px] text-[30px] !rounded-[100px] z-10`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.3, ease: "linear" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-[22px] px-1.5 rounded-tl-[10px] rounded-bl-[10px] border-[2px] border-yellow-doge-500 bg-bg2 bg-opacity-20 backdrop-blur-[10.10px] absolute top-[calc(100%+15px)] right-0 w-[216px] flex flex-col gap-3 z-50"
          >
            <div className="flex items-center justify-between px-4">
              {/* <AstroDoge width={80} height={21} /> */}
              <div className="text-white font-extrabold text-left text-2xl">Astrodoge</div>
              <button
                className="btn !p-0 text-lg"
                aria-label="Close menu"
                title="Close menu"
                onClick={() => setIsVisible(false)}
              >
                <CircleClose />
              </button>
            </div>
            {menuLinksLanding.map((link, i) => (
              <MenuMobileLink key={i} link={link} />
            ))}
            <Button variant="primary" icon={mainArrow}>
              Connect your wallet
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MenuMobileApp = () => {
  const { ref, isVisible, setIsVisible } = ComponentVisible(false);

  return (
    <div className="lg:hidden flex gap-2.5" ref={ref}>
      <SelectorAccoundHandlerSmall />

      <button
        type="button"
        aria-label={isVisible ? "Close menu" : "Open menu"}
        className={`btn w-[35px] h-[34px] text-[19px] !rounded-[100px] bg-navy-blue-900 ${
          isVisible ? "bg-opacity-100 text-white" : "bg-opacity-0"
        }`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuLine />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{ duration: 0.5, ease: [0.21, 1.25, 0.64, 1] }}
            initial={{ right: -328 }}
            animate={{ right: 0 }}
            exit={{ right: -328 }}
            className="absolute top-0 w-[330px] h-screen bg-white bg-opacity-5 backdrop-blur-[20px] py-20 px-5 z-50"
          >
            <button
              type="button"
              aria-label="Close menu"
              title="Close menu"
              className="flex items-center right-5 absolute gap-[5px]"
              onClick={() => setIsVisible(false)}
            >
              <span className="text-xs leading-normal">Close</span>
              <span className="text-[20px] leading-normal">
                <Close />
              </span>
            </button>

            <div className="pt-10">
              <SelectorAccoundHandler className="mb-2" />

              <a
                href="#"
                className="btn h-[38px] bg-navy-blue-900 hover:bg-oxford-blue-800 !rounded-10 mb-5 text-white gap-[5px]"
              >
                <span className="text-xs leading-normal">Account manager</span>
                <span className="text-sm">
                  <ChevronUpRight />
                </span>
              </a>

              <div>
                {menuLinksApp.map((link, i) => (
                  <a
                    href={link.href}
                    key={i}
                    className="text-sm leading-[14px] flex gap-[5px] px-5 py-3 mb-2 last:mb-0 hover:bg-shark-950 hover:text-white rounded-[100px] hover:shadow-[0px_10px_15px_0px_rgba(71,_103,_135,_0.20)] !transition-[background,color,box-shadow]"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
