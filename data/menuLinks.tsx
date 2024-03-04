import RealState from "@/components/UI/Icons/RealState";
import Leading from "@/components/UI/Icons/Lending";
import ShieldCheck16 from "@/components/UI/Icons/ShieldCheck16";

import Docs from "@/components/UI/Icons/Docs";
import Faqs from "@/components/UI/Icons/Faqs";

import {
  discordLink,
  twitterLink,
  telegramLink,
  githubLink,
  mediumLink,
} from "@/data/social";
import Home from "@/components/UI/Icons/Home";
import Resources from "@/components/UI/Icons/Resources";
import Community from "@/components/UI/Icons/Community";
import Efts from "@/components/UI/Icons/Efts";
import Marketplace from "@/components/UI/Icons/Marketplace";
import ChartBar from "@/components/UI/Icons/ChartBar";
import Staking from "@/components/UI/Icons/Staking";
import Shop from "@/components/UI/Icons/Shop";

export const menuLinksLanding = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "#section2",
  },
  {
    name: "How to buy",
    href: "#section3",
  },
  {
    name: "Tokenomics",
    href: "#section4",
  },
  {
    name: "Roadmap",
    href: "#section5",
  },
];

export const menuLinksApp = [
  {
    name: "Home",
    href: "#",
    icon: <Home />,
  },
  {
    name: "Real Estate",
    href: "#",
    icon: <RealState />,
  },
  {
    name: "Private Credit",
    href: "#",
    icon: <ShieldCheck16 />,
  },
  {
    name: "Lending and Borrowing",
    href: "#",
    icon: <Leading />,
  },
  {
    name: "Sell",
    href: "#",
    icon: <Marketplace />,
  },
  {
    name: "Staking",
    href: "#",
    icon: <Staking />,
  },
  {
    name: "Analytics",
    href: "#",
    icon: <ChartBar />,
  },
];
