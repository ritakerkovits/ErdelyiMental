import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-light-font py-12">
      <div className="container mx-auto px-4 min-h-[400px] md:min-h-0 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:block">
            <div className="grid md:grid-cols-[2fr_1.5fr_1.5fr] gap-16 lg:gap-20 mb-8 text-center md:text-left">
            {/* Elérhetőség Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4" style={{ color: "#F8F8F8", fontSize: "20px" }}>
                Elérhetőség
              </h3>
              <address className="not-italic space-y-2 text-light-font/80 text-base" style={{ color: "#CCCED3", fontSize: "16px" }}>
                <p>
                  <a
                    href="tel:+36304006490"
                    aria-label="Hívás indítása: +36 30 400 6490"
                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue"
                  >
                    +36 30 400 6490
                  </a>
                </p>
                <p>
                  <a
                    href="https://maps.google.com/maps?q=1026+Budapest,+Gyergyó+u.+8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Megnyitás térképen: 1026 Budapest, Gyergyó u. 8 Fsz. 3"
                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue"
                  >
                    1026 Budapest, Gyergyó u. 8 Fsz. 3
                  </a>
                </p>
              </address>
            </div>

            {/* Rendelési idő Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4" style={{ color: "#F8F8F8", fontSize: "20px" }}>
                Rendelési idő
              </h3>
              <ul className="space-y-2 text-light-font/80 text-base">
                <li>Hétfő: 17:00 - 20:00</li>
                <li>Szerda: 08:00 - 11:00</li>
                <li>Csütörtök: 16:00 - 20:00</li>
              </ul>
            </div>

            {/* Linkek Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4" style={{ color: "#F8F8F8", fontSize: "20px" }}>
                Linkek
              </h3>
              <nav>
                <ul className="space-y-2 text-light-font/80 text-base">
                  <li>
                    <Link
                      href="/bemutatkozas"
                      className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue"
                    >
                      Bemutatkozás
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terapias-modszereim"
                      className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue"
                    >
                      Terápiás módszereim
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kapcsolat"
                      className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue"
                    >
                      Kapcsolatfelvétel
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Horizontal Divider */}
          
          <div className="border-t mb-6 w-full" style={{ borderColor: "#C4C8CD" }}></div>

          {/* Copyright */}
          <div className="text-center text-base text-gray-300">
            <p>© 2025 Dr. Erdélyi Kálmán. Minden jog fenntartva.</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
