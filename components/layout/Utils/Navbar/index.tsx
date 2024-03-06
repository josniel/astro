import { useState, useEffect } from "react";

import { menuLinksLanding } from "@/data/menuLinks";

import NavbarLinkLanding, { NavbarLinkApp } from "@/components/layout/Utils/NavbarLink";
import Button from "@/components/UI/Button";
import AccountHandler from "@/components/layout/Utils/Navbar/AccountHandler";
import mainArrow from "../../../../public/static/images/buttons/main-arrow.svg";
import useStore from '@/store'


export const NavbarLanding = ({ isFooter }: { isFooter?: boolean }) => {
  const [activeSection, setActiveSection] = useState('section1');
  const isConnected = useStore((state) => state.isConnected)
  const handleMenuClick = (sectionId:string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -170; // Ajuste fino para centrar verticalmente
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];
      let visibleSection = '';
  
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            visibleSection = sectionId;
          }
        }
      });
  
      if (visibleSection !== '') {
        setActiveSection(visibleSection);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`flex items-center lg:justify-between ${isFooter ? 'w-[35%] my-2 max-md:w-[100%]':'w-[100%] max-lg:hidden'}`}>
      <ul className={`${isFooter ? 'max-xl:grid max-xl:grid-cols-3 max-xl:gap-1 max-xl:text-nowrap w-[100%] xl:flex max-md:mt-[-20px]' : 'flex xl:gap-3 lg:gap-[1]'}`}>
        {menuLinksLanding.map((link, i) => (
          <li key={i} className={activeSection === `section${i+1}` ? 'border-b-2 border-yellow-doge-500 z-10' : 'hover:border-b-2 border-yellow-doge-500 z-10'} onClick={() => handleMenuClick(`section${i+1}`)}>
            <NavbarLinkLanding link={link} />
          </li>
        ))}
      </ul>
      {!isFooter && 
        (!isConnected ?  
          <ul className="flex xl:gap-3 lg:gap-[1]">
            <li>
              <Button variant="primary" icon={mainArrow} href="/connect-your-wallet">
                Connect your wallet
              </Button>
            </li>
          </ul>
        : 
          <AccountHandler />
        )
      }
    </nav>
  );
};