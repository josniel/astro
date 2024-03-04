"use client";
import { MenuMobileApp, MenuMobileLanding } from "@/components/MenuMobile";
import { NavbarApp, NavbarLanding } from "@/components/layout/Utils/Navbar";

import HeaderBase from "@/components/layout/Base/HeaderBase";

export const HeaderLanding = () => {
  return (
    <HeaderBase>
      <NavbarLanding />
      <MenuMobileLanding />
    </HeaderBase>
  );
};

/* export const HeaderApp = () => {
  return (
    <HeaderBase>
      <MenuMobileApp />
      <NavbarApp />
    </HeaderBase>
  );
}; */
