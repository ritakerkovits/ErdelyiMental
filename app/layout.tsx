import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erdelyimental.hu"),
  title: "Dr. Erdélyi Kálmán - Pszichiáter és Pszichoterapeuta",
  description:
    "Üdvözlöm! Dr. Erdélyi Kálmán vagyok, pszichiáter és pszichoterapeuta. Budapesti magánrendelésemen segítek többek között szorongás, depresszió, életvezetési és más lelki problémák kezelésében.",
  keywords:
    "pszichiáter, pszichoterapeuta, pszichoterápia, mentális segítségnyújtás, szorongás, depresszió, teljesítményszorongás, mentális felkészítés, verseny előtti tanácsadás sportpszichológia, sportpszichiátria, Budapest",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.erdelyimental.hu",
  },
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
    url: "https://www.erdelyimental.hu",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
    images: [
      {
        url: "/images/og-logo.jpg", 
        width: 1200, 
        height: 630,
        alt: "Dr. Erdélyi Kálmán logo",
      },
    ],
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
      <head>
        {/* Prevent browser forced dark mode */}
        <meta name="color-scheme" content="light" />
        {/* You can add other global meta tags here */}
      </head>
      <body className={inter.className}>
        <Header />
        <main role="main" id="main-content" className="animate-gpu">
          <div className="page-transition-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
