import type { Metadata } from "next";
import "@/styles/globals.css";
import { HeaderLanding } from "@/components/layout/Header";
import { FooterLanding } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Astro Doge",
  description:
    "Finance App",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <HeaderLanding />
          <div className="pt-[119px]">{children}</div>
        <FooterLanding />
      </body>
    </html>
  );
}
