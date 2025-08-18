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
              <address className="not-italic space-y-2" style={{ color: "#CCCED3", fontSize: "16px" }}>
                <p>+36 30 400 6490</p>
                <p>1026 Budapest, Gyergyó u. 8 Fsz. 3</p>
              </address>
            </div>

            {/* Rendelési idő Column */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-medium mb-4" style={{ color: "#F8F8F8", fontSize: "20px" }}>
                Rendelési idő
              </h3>
              <ul className="space-y-2" style={{ color: "#CCCED3", fontSize: "16px" }}>
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
                <ul className="space-y-2" style={{ color: "#CCCED3", fontSize: "16px" }}>
                  <li>
                    <Link
                      href="/bemutatkozas"
                      className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                    >
                      Bemutatkozás
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terapias-modszereim"
                      className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                    >
                      Terápiás Módszereim
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kapcsolat"
                      className="hover:text-white transition-colors duration-200 focus:text-white focus:outline-none focus:underline"
                    >
                      Kapcsolat felvétel
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Horizontal Divider */}
          
          <div className="border-t mb-6 w-full" style={{ borderColor: "#C4C8CD" }}></div>

          {/* Copyright */}
          <div className="text-center" style={{ color: "#CCCED3", fontSize: "16px" }}>
            <p>© 2025 Dr. Erdélyi Kálmán. Minden jog fenntartva.</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
