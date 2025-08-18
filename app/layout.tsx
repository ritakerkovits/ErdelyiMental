import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  //metadataBase: new URL("https://www.erdelyimental.hu"),
  title: "Dr. Erdélyi Kálmán - Pszichiáter és Pszichoterapeuta",
  description:
    "Üdvözlöm! Dr. Erdélyi Kálmán vagyok, pszichiáter és pszichoterapeuta. Budapesti magánrendelésemen segítek többek között szorongás, depresszió, életvezetési és más lelki problémák kezelésében.",
  keywords:
    "pszichiáter, pszichoterapeuta, pszichoterápia, mentális egészség, szorongás, depresszió, sportpszichológia, Budapest",
  viewport: "width=device-width, initial-scale=1",
  /*alternates: {
    canonical: "https://www.erdelyimental.hu",
  },*/
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: "/images/favicon-48-bg.png", sizes: "32x32",
        href: "/images/favicon-48-bg.png",
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: "/images/favicon-48-bg-darkmode.png", sizes: "32x32",
        href: "/images/favicon-48-bg-darkmode.png",
      },
    ],
  },
  openGraph: {
    title: "Dr. Erdélyi Kálmán - Pszichiáter és Pszichoterapeuta",
    description:
      "Üdvözlöm! Dr. Erdélyi Kálmán vagyok, pszichiáter és pszichoterapeuta. Budapesti magánrendelésemen segítek többek között szorongás, depresszió, életvezetési és más lelki problémák kezelésében.",
    //url: "https://www.erdelyimental.hu",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
