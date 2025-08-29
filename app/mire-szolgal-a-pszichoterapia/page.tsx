import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Mire szolgál a pszichoterápia - Dr. Erdélyi Kálmán",
  description:
    "Ismerje meg, mikor érdemes pszichoterapeutához fordulni, mi a pszichoterápia célja és melyek a sikeres terápia alapfeltételei a hatékony lelki változáshoz.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/mire-szolgal-a-pszichoterapia",
  },
  openGraph: {
    title: "Mire szolgál a pszichoterápia – Dr. Erdélyi Kálmán",
    description:
      "Ismerje meg, mikor érdemes pszichoterapeutához fordulni, mi a pszichoterápia célja és melyek a sikeres terápia alapfeltételei.",
    //url: "https://www.erdelyimental.hu/mire-szolgal-a-pszichoterapia",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function MireServesPage() {
  return (
  <PageWrapper>
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-10" style={{ backgroundColor: "#FDECDD" }}>
        <div className="container mx-auto px-4 pt-16 lg:pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <AnimatedElement animation="fadeUp" delay={0}>
              <header>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Mire szolgál a pszichoterápia</h1>
              </header>
              </AnimatedElement>
              {/* Right Side - Quote */}
              <AnimatedElement
                animation="slideLeft"
                delay={200}
                className="flex flex-col items-end"
                as="figure"
              >
                <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                  <p>"Mindig a holnapra mosolygok,</p>
                  <p className="ml-1">Elvágyom onnan, ahol bolygok,</p>
                  <p className="ml-1">Úgy vágytam ide s most már szállnék,</p>
                  <p className="ml-1">Óh, én bolond, bús, beteg árnyék."</p>
                </blockquote>
              <figcaption className="text-right mt-1">
                <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Ady Endre: A kék tenger partján/</cite>
              </figcaption>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* First Content Section */}
      <section className="pt-8 pb-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[5fr_2fr] gap-[0] items-start">
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* First Subsection */}
                <AnimatedElement animation="fadeUp" delay={300}>
                <div>
                  <h2 className="text-lg font-semibold text-dark-font mb-2">
                    Mikor érdemes pszichoterapeutához fordulni
                  </h2>
                  <p className="text-dark-font leading-relaxed mb-2">
                    Amikor aktuális lelki gondjai, tünetei megnehezítik az életvezetését és úgy érzi, hogy szüksége volna segítségre, akkor érdemes pszichoterapeutához fordulnia. A szakember nem hétköznapi módon foglalkozik az Ön problémáival, hanem azt a módszert választja, amivel az leginkább és leghamarabb megoldható.
                  </p>
                  <p className="text-dark-font leading-relaxed">
                    A lelki problémák nyomásában tehetetlennek érzi magát. Jelen állapotát, de a jövőjét is
                    kilátástalannak érezheti. Ugye ismerősek ezek a gondolatok: „Nem ismerek önmagamra ... Mintha nem én lennék ... Nem tudom mi
                lesz velem ... Tehetetlen vagyok ... Kihez forduljak? Ki segíthetne rajtam?"
                  </p>
                </div>
                </AnimatedElement>

                {/* Second Subsection */}
                <AnimatedElement animation="fadeUp" delay={500}>
                <div>
                  <h3 className="text-lg font-semibold text-dark-font mb-2">
                    Hogyan lehet az állapotán kedvezően változtatni
                  </h3>
                  <p className="text-dark-font leading-relaxed">
                    Emberileg érthető az a kívánsága, hogy egy-kettőre szűnjön meg a tünet és oldódjon meg a probléma. Csakhogy a tünetek olyan következmények, amelyeknek előtörténetük van. Látszólagos egyensúlyt teremtve védenek attól, hogy egy mélyebb, elfojtott, elfeledett lelki problémával szembesüljön, pedig éppen ez az oka a tüneteknek. A tünetek lekötik gondolatait, felhasználják energiáit és az így okozott szenvedéssel kénytelen törődni, nem a mögötte meghúzódó okokkal. Előfordulhat, hogy friss traumatikus életesemény szakít fel régi lelki sebeket, nem ritkán pedig éveken át hordozza lelki sérüléseit anélkül, hogy tudná, miért kell így szenvednie.
                  </p>
                </div>
                </AnimatedElement>
              </div> 

              {/* Right Side - Image */}
              
              <AnimatedElement
                      animation="slideLeft"
                      delay={400}
                      className="flex justify-center lg:justify-end lg:-mr-16 lg:-mt-6"
                      
              >
                <figure className="lg:w-[380px] lg:min-w-[380px]">
                  <img
                    src="/images/pszichoterapia.jpg"
                    alt="Mire szolgál a pszichoterápia illusztráció - békés tengerpart vitorlással, a belső béke és gyógyulás szimbóluma"
                    className="h-auto object-cover"
                    style={{ 
                      maxWidth: "100%", 
                      width: "380px",
                      height: "auto" }}
                    loading="lazy"
                  />
                </figure>

              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="py-8 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement animation="fadeUp" delay={600}>
            <h2 className="text-lg font-semibold text-dark-font mb-2">Mi is tehát a pszichoterápia célja</h2>
            </AnimatedElement>
            <div className="space-y-6 text-dark-font leading-relaxed">
              <AnimatedElement animation="fadeUp" delay={700}>
              <p>
                Kétségkívül segít a tünetek megszűntetésében is. Még inkább alkalmas azonban arra, hogy feltárja a
                mélyen fekvő okokat, összefüggéseket és a tudatosítás fényében uralmat és kontrollt szerezzen a
                tüneteket okozó erők felett.
              </p>
              </AnimatedElement>

              <AnimatedElement animation="fadeUp" delay={800}>
              <div>
                <p className="mb-2">Szükséges tehát, hogy:</p>
                <ul className="space-y-1 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Ismerd meg Önmagad!
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Fogadd el Önmagad!
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Barátkozz meg Önmagaddal!
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Légy fontos Önmagadnak!
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Nyújts biztonságot Önmagadnak!
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Vezesd Önmagad!
                  </li>
                </ul>
              </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeUp" delay={900}>
              <p>
                Ezeknek a belső erőknek a birtokában képes lesz határozottabban kezelni aktuális lelki problémáit, belső
                konfliktusait, megelőzve ezzel a tünetek későbbi visszatérését!
              </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Last Content Section */}
      <section className="py-8 bg-white mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement animation="fadeUp" delay={1000}>
            <h2 className="text-lg font-semibold text-dark-font mb-2">Mik a sikeres pszichoterápia alapfeltételei</h2>
            </AnimatedElement>
            <div className="space-y-6 text-dark-font leading-relaxed">
              <AnimatedElement animation="fadeUp" delay={1100}>
              <p>
                A kimondott és ki nem mondott érzéseknek, lélektani történéseknek súlya van és az eredményes terápiához
                a terapeuta önmagában nem elég. A sikeres pszichoterápia, lélektani segítségnyújtás alapja ugyanis a
                szenvedésnyomáson túl a motiváció és a bizalom. Az adott egyén és a terapeuta egy terápiás egységben
                közösen gondolkodik. Közösen egy célért. Az együttműködés, az ideális terápiás kapcsolat kiépítése az
                eredményes munka záloga.
              </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>
  )
}
