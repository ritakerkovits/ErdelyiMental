"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      {/* Top line */}
      <div
        className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-2"
        }`}
      />
      {/* Middle line */}
      <div
        className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      {/* Bottom line */}
      <div
        className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-2"
        }`}
      />
    </div>
  )
}


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Kezdőlap" },
    { href: "/bemutatkozas", label: "Bemutatkozás" },
    { href: "/mire-szolgal-a-pszichoterapia", label: "Mire szolgál a pszichoterápia" },
    { href: "/terapias-modszereim", label: "Terápiás módszereim" },
    { href: "/sportoloi-referenciak", label: "Referenciák" },
    { href: "/kapcsolat", label: "Kapcsolatfelvétel", isCTA: true },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-dark-blue backdrop-blur-sm shadow-sm fixed top-0 left-0 w-full z-50 border-b border-white/10"
    >
      {/*<div className="md:container md:mx-auto lg:w-full xl:container xl:mx-auto px-4 lg:px-6 xl:px-8">*/}
      <div className="container mx-auto px-4 lg:max-w-[95%] xl:max-w-[95%]">

        <div className="flex items-center justify-between py-4">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-4">
            <img
              src="/images/logo-nav.svg"
              alt="Dr. Erdélyi Kálmán logo"
              className="flex-shrink-0 w-12 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12"
              
            />
            <span className="text-md sm:text-base md:text-lg lg:text-lg xl:text-md 2xl:text-xl text-white">Dr. Erdélyi Kálmán</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center text-center lg:text-sm xl:text-md 2xl:text-base space-x-2 md:space-x-3 lg:space-x-3 xl:space-x-6 2xl:space-x-8 px-2 md:px-4 lg:px-6 xl:px-4 2xl:px-16">
            {navigationItems.map((item) => {
              const active = isActive(item.href)

              if (item.isCTA) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 lg:px-4 xl:px-3 2xl:px-4 rounded font-medium lg:text-sm xl:text-sm 2xl:text-md text-center transition-colors duration-200
                    ${active ? "bg-peach text-dark-font" : "bg-light-blue text-dark-font hover:bg-light-peach"}
                  `}
                    
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition-colors duration-200 font-medium pb-1
                    ${active ? "text-peach" : "text-white hover:text-peach focus:text-peach"}
                  `}
                  
                >
                  {item.label}
                  {active && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: "#fce4cf" }}
                    ></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatedHamburger isOpen={isMenuOpen} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 ">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const active = isActive(item.href)

                if (item.isCTA) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`bg-light-blue text-gray-900 py-3 px-4 rounded font-medium hover:bg-light-blue/90 transition-colors duration-200 text-center
                      ${active ? "bg-peach text-dark-font" : "bg-light-blue text-dark-font hover:bg-light-peach"}
                      `}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ borderRadius: "4px" }}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-white hover:text-peach transition-colors duration-200 py-2 px-4 rounded font-medium ${
                      active ? "text-peach bg-white/10 border-l-4" : ""
                    }`}
                    style={active ? { borderLeftColor: "#fce4cf" } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
