import { useState } from "react";

import { menuLinksLanding } from "@/data/menuLinks";
import { menuLinksApp } from "@/data/menuLinks";

import NavbarLinkLanding, { NavbarLinkApp } from "@/components/layout/Utils/NavbarLink";
import SelectorAccoundHandler from "@/components/layout/Utils/SelectorAccoundHandler";
import SelectorAccoundHandlerSmall from "@/components/layout/Utils/SelectorAccoundHandler/SelectorAccoundHandlerSmall";
// import ConnectYourWallet from "@/components/Modals/ConnectYourWallet";
import Modal from "@/components/Modals/ModalOverlay";
import Button from "@/components/UI/Button";
import mainArrow from "../../../../public/static/images/buttons/main-arrow.svg";

import GoTo from "@/components/UI/Icons/GoTo";
import Wallet from "@/components/UI/Icons/Wallet";

export const NavbarLanding = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <nav className={`flex items-center lg:justify-between ${isFooter ? 'w-[35%] my-2 max-md:w-[100%]':'w-[100%] max-lg:hidden'}`}>
      <ul className={`${isFooter ? 'max-xl:grid max-xl:grid-cols-3 max-xl:gap-1 max-xl:text-nowrap w-[100%] xl:flex max-xl:mt-[-20px]' : 'flex xl:gap-3 lg:gap-[1]'}`}>
        {menuLinksLanding.map((link, i) => (
          <li key={i} className="hover:border-b-2 border-yellow-doge-500 z-10">
            <NavbarLinkLanding link={link} />
          </li>
        ))}
      </ul>
      {!isFooter && 
        <ul className="flex xl:gap-3 lg:gap-[1]">
          <li>
            <Button variant="primary" icon={mainArrow}>
              Connect your wallet
            </Button>
          </li>
        </ul>
      }
    </nav>
  );
};

/* export const NavbarApp = () => {
  const [connectYourWalletModal, setConnectYourWalletModal] = useState(false);
  const [status, setStatus] = useState<
    "unverified" | "connected" | "verfied" | null
  >(null);

  return (
    <nav className="max-lg:hidden relative">
      <ul className="flex gap-1.5 2xl:gap-5 items-center">
        {menuLinksApp.map((link, i) => (
          <li key={i}>
            <NavbarLinkApp link={link} />
          </li>
        ))}

        <ConnectYourWallet
          openModal={connectYourWalletModal}
          setOpenModal={setConnectYourWalletModal}
        />

        {status === null ? (
          <li className="2xl:pl-[3px]">
            <button
              aria-label="Connect Wallet"
              type="button"
              className="btn bg-shark-950 max-xl:w-[30px] xl:w-[180px] 2xl:w-[237px] h-[30px] xl:h-[38px] hover:bg-regent-gray-600 text-xs leading-[14px] text-white gap-[5px] !rounded-[100px]"
              onClick={() => setConnectYourWalletModal(true)}
            >
              <span className="text-sm leading-normal">
                <Wallet />
              </span>
              <span className="max-xl:hidden">Connect Wallet</span>
            </button>
          </li>
        ) : (
          <li>
            <SelectorAccoundHandler className="max-xl:hidden" />
            <SelectorAccoundHandlerSmall className="xl:hidden" />
          </li>
        )}
      </ul>
    </nav>
  );
}; */
