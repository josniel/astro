import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Astro Doge",
  description:
    "Finance App",
};
import { Chakra_Petch } from 'next/font/google'
const chakraPetch = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${chakraPetch.className}`}>
          {children}
      </body>
    </html>
  )
}
