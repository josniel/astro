import type { Metadata } from "next";
import "@/styles/globals.css";
import { HeaderLanding } from "@/components/layout/Header";
import { FooterLanding } from "@/components/layout/Footer";
import { Chakra_Petch } from 'next/font/google'

export const metadata: Metadata = {
  title: "Astro Doge",
  description:
    "Finance App",
};

const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body suppressHydrationWarning={true} className={`${chakraPetch.className}`}>
        <HeaderLanding />
          <div className="pt-[119px]">{children}</div>
        <FooterLanding />
      </body>
    </html>
  );
}
