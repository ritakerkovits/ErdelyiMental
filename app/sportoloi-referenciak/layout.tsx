import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referenciák - Dr. Erdélyi Kálmán",
  description:
    "Sportolói referenciák és visszajelzések mentális felkészítésről és pszichoterápiáról. Olimpiai és világbajnok sportolók tapasztalatai első kézből.",
  alternates: {
    canonical: "/sportoloi-referenciak",
  },
}

export default function ReferenciakLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
