import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stresszkezelés - Dr. Erdélyi Kálmán",
  description:
    "Stresszkezelés autogén tréninggel, mely segít csökkenteni a feszültséget, harmonizálja a vegetatív idegrendszert, és támogatja a testi-lelki ellazulást.",
  alternates: {
    canonical: "/stresszkezeles-stresszoldas",
  },
  openGraph: {
    title: "Stresszkezelés – Dr. Erdélyi Kálmán",
    description:
      "Stresszkezelés autogén tréninggel, mely segít csökkenteni a feszültséget, harmonizálja a vegetatív idegrendszert, és támogatja a testi-lelki ellazulást.",
    //url: "https://www.erdelyimental.hu/stresszkezeles-stresszoldas",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function StresszkezelésPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Stresszkezelés</h1>
              </div>

              {/* Right Side - Quote */}
              <figure className="flex flex-col items-end">
                  <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"Szökik a köd, futok utána,</p>
                    <p className="ml-1">szökik a köd, gyorsabb a lába.</p>
                    <p className="ml-1">Ködből a köd, ködből a lába,</p>
                    <p className="ml-1">Amíg test vagy, mért futsz utána?"</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey  text-xs md:text-sm italic font-medium">/Zelk Zoltán: Ne siess!/</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Content with embedded image */}
            <div className="space-y-2">
              <p className="text-dark-font leading-relaxed mb-2">
                A stressz szokványos jelentése szerint olyan történés, amikor a minket érő környezeti behatásra nem
                tudunk megfelelően reagálni és tehetetlenül beszorulunk egy akcióra felkészült, de cselekvőképtelen
                állapotba. A tehetetlen beszorultság maga a tüneti szorongás ennek számos vegetatív idegrendszeri
                megjelenési formájával (pl.: ájulásszerű fizikai rosszullét, szív és keringési rendszer zavarai, pánik
                tünetek, megsemmisüléstől való félelem). A szervezeti küzdőhormonok (stresszhormonok pl.: adrenalin,
                noradrenalin, kortizol) szimpatikus idegrendszeri aktivitást tartanak fenn, amely a nyugtalan
                felajzottságért és szorongásért felelős. Ezért a stresszkezelésben meg kell tanulnunk a magas
                feszültségi szint csökkentését és a behatásokra reagálás mértékének tompítását.
              </p>

              <div className="relative grid lg:grid-cols-2">
                
                <div className="lg:col-span-1">
                  <p className="text-dark-font leading-relaxed mb-2">
                    A sokféle lehetőség közül az autogén tréninget emelem ki, amely éppen a stresszben szélsőségesen
                    működő vegetatív idegrendszer működési harmonizációjára törekszik. Leginkább ellazító módszerként
                    ismeretes, pedig többre képes, mert nem csak megnyugtat és feszültséget old, hanem módszeresen
                    programozza a legfontosabb vegetatív működéseket és megtanít a stresszállapotok hatásainak szervezeti
                    csökkentésére.
                  </p>

                  <p className="text-dark-font leading-relaxed mb-2">
                    Hat gyakorlatból áll, amelyet rendszeres gyakorlással szükséges elsajátítani. Minden gyakorlat 2 hét
                    tréning időt igényel, így 3 hónap alatt lehet a módszer birtokába jutni. Az autogén tréning lehetővé
                    teszi az izomzat ellazítását, a szív és keringési rendszer egészséges működésének elérését, a légzés
                    tökéletesítését és az egészséges légzéssel elérhető belső szervezeti folyamatok kedvező
                    megváltoztatását, a zsigeri vegetatív működések harmonizációját és a szellemi kipihentség és
                    felfrissülés állapotának elérését.
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <figure className=" ml-2 mb-4 lg:max-w-full lg:-mt-6">
                    <img
                      src="/images/stresszkezeles.jpg"
                      alt="Stresszkezelés művészeti ábrázolás - fekete-fehér rajz viharos környezetben lévő figurákkal, a stressz és megküzdés szimbóluma"
                      className="lg:w-full h-auto object-cover"
                      
                      style={{
                        width: "500px",
                        height: "auto",
                        
                    }}
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
