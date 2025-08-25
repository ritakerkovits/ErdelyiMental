"use client"

import type React from "react"
import { PageTransition } from "@/components/page-transition"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <PageTransition>
      <div className={`min-h-screen ${className}`}>{children}</div>
    </PageTransition>
  )
}
