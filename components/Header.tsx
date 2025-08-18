"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Kezdőlap" },
    { href: "/bemutatkozas", label: "Bemutatkozás" },
    { href: "/mire-szolgal-a-pszichoterapia", label: "Mire szolgál a pszichoterápia" },
    { href: "/terapias-modszereim", label: "Terápiás módszereim" },
    { href: "/sportoloi-referenciak", label: "Referenciák" },
    { href: "/kapcsolat", label: "Kapcsolat felvétel", isCTA: true },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-dark-blue shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-4">
            <img
              src="/images/logo-nav.svg"
              alt="Dr. Erdélyi Kálmán logo"
              className="flex-shrink-0 w-12 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12"
              
            />
            <span className="text-base font-medium sm:text-lg lg:text-xl text-white">Dr. Erdélyi Kálmán</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 px-8">
            {navigationItems.map((item) => {
              const active = isActive(item.href)

              if (item.isCTA) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-light-blue text-dark-font px-4 py-2 rounded font-medium md:text-sm hover:bg-light-blue/90 transition-colors duration-200"
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
                  className={`relative text-white hover:text-peach focus:text-peach transition-colors duration-200 font-medium pb-1 ${
                    active ? "text-light-peach" : ""
                  }`}
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
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const active = isActive(item.href)

                if (item.isCTA) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="bg-light-blue text-dark-font py-3 px-4 rounded font-medium hover:bg-light-blue/90 transition-colors duration-200 text-center"
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
