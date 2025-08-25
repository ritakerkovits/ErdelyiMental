"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Start exit animation
    setIsVisible(false)

    const timer = setTimeout(() => {
      // Update content and start enter animation
      setDisplayChildren(children)
      setIsVisible(true)
    }, 150) // Half of transition duration

    return () => clearTimeout(timer)
  }, [pathname, children])

  useEffect(() => {
    // Initial load animation
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-all duration-300 ease-out animate-gpu ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {displayChildren}
    </div>
  )
}
