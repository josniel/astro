/* eslint-disable import/no-default-export */
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Poppins } from 'next/font/google'

// import Footer from '@/components/Common/Layout/Footer'
// import Header from '@/components/Common/Layout/Header'

export const metadata: Metadata = {
  title: 'Astro Dog',
  description: 'Astro Doge is a decentralized meme token that grows in value by holding. The community is in control of the token and can vote on proposals to change the token.',
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
//good
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body suppressHydrationWarning={true} className={`${poppins.className} relative pt-[26px] pb-5`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
