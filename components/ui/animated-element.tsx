"use client"

import type React from "react"
import type { ElementType, ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "slideUp" | "slideLeft" | "slideRight"
  delay?: number
  duration?: number
  as?: ElementType
}

export function AnimatedElement({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 600,
  as: Component = "div",
}: AnimatedElementProps) {
  const { elementRef, isVisible } = useScrollAnimation({ delay })

  const animationClasses = {
    fadeUp: {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    fadeIn: {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    slideUp: {
      initial: "opacity-0 translate-y-12",
      animate: "opacity-100 translate-y-0",
    },
    slideLeft: {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    slideRight: {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
  }

  const { initial, animate } = animationClasses[animation]

  return (
    <Component
      ref={elementRef}
      className={cn("transition-all ease-out", isVisible ? animate : initial, className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </Component>
  )
}
