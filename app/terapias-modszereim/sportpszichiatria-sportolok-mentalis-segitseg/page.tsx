import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Sportpszichiátria - Dr. Erdélyi Kálmán",
  description:
    "Sportpszichiátria és mentális segítségnyújtás sportolóknak, élsportolóknak: teljesítményszorongás csökkentés, stresszkezelés, mentális felkészítés versenyekre.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/terapias-modszereim/sportpszichiatria-sportolok-mentalis-segitseg",
  },
  openGraph: {
    title: "Sportpszichiátria - Dr. Erdélyi Kálmán",
    description:
      "Sportpszichiátria és mentális segítségnyújtás sportolóknak, élsportolóknak: teljesítményszorongás csökkentés, stresszkezelés, mentális felkészítés versenyekre.",
    url: "https://www.erdelyimental.hu/terapias-modszereim/sportpszichiatria-sportolok-mentalis-segitseg",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function SportpszichiatriaPage() {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4 pt-16 lg:pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <AnimatedElement animation="fadeUp" delay={0}>
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font md:w-[700px]">
                  Sportpszichiátria. Sportolók, élsportolók számára mentális segítségnyújtás
                </h1>
              </div>
              </AnimatedElement>

              {/* Right Side - Quote */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={200}
                className="flex flex-col items-end"
                as="figure"
              >
                  <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed mb-2">
                    <p>"A nehéz feladatok megvalósításához sok idő kell,</p>
                    <p className="ml-1">a lehetetlenekéhez egy kicsit még több."</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Percy Cerutty/</cite>
                </figcaption>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* First Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-2">
            <AnimatedElement animation="fadeUp" delay={300}>
              <p className="text-dark-font leading-relaxed mb-2 lg:w-[900px]">
                A mentális stabilitás szükséges alap! Ahhoz, hogy (él)sportolóként jól teljesítsen, önmagával is jóban
                kell lennie! Nem minden ember sportoló, de minden sportoló ember. Önálló entitás - személyes
                élményekkel, múlttal, jelennel, sebezhetőséggel. Egy (él)sportolónak ugyanúgy lehetnek múltbeli vagy
                jelenben megélt - többek között magánélethez, edzőhöz, az elvárt teljesítményekhez köthető - traumatikus
                élményei, lelki konfliktusai.
              </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={400}>
              <p className="text-dark-font leading-relaxed mb-2 lg:w-[900px]">
                Az (él)sportoló tüneteit, múltját, jelenét ilyenkor többnyire szégyelli, titkolja, sokszor úgy érzi, nem
                engedheti meg, hogy látszódjon rajta a gyengesége. Küzd, a lelke sérült, egyedül van. Ilyenkor "belül"
                segítséget igényel (de sokszor ezt nem tudja kimondani) és valójában segítségre is szorul. Igény esetén
                ebben tudok segítséget nyújtani. Volt élsportolóként a sportolói lét, közeg sem idegen számomra, így át
                tudom élni és érezni a megélt csodákat ugyanúgy, mint a kísérő nehézségeket, bizonytalanságokat,
                elakadást, sebezhetőséget.
              </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section with Light Peach Background */}
      <section className="py-8" style={{ backgroundColor: "#FDECDD" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="lg:w-[900px]">
              <AnimatedElement animation="fadeUp" delay={500}>
              <h2 className="text-xl font-semibold text-dark-font mb-2">
                Jellemző problémakörök, igények, amivel megkeresnek
              </h2>
              </AnimatedElement>

              <div className="text-dark-font leading-relaxed">
                <ul className="space-y-2 ml-4 md:ml-6">
                  <AnimatedElement animation="fadeUp" delay={600}>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Versenyhelyzetben tapasztalt csökkent vagy várakozásnak nem megfelelő teljesítmény
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    A sportoló edzések alkalmával és a versenyek pszichés megterhelése alatt elért eredményei jelentősen eltérnek egymástól
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Önértékelési és szorongásos problémák, melyek adott esetben a sportoló sporton kívüli szociális
                    viselkedésére is kihatnak
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Feladat priorizálási kérdések (tanulás / edzés, magánélet / edzés)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Jövőkép és célok kialakítása és a reális lehetőségek feltérképezése
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Munkakapcsolat az edzővel és ennek buktatói
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Kommunikációs defektusok, maladaptív rutinok (hiányos / rossz alkalmazkodás, indulatkezelés, énképet
                    romboló kommunikáció, izoláció)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Burn out
                  </li>
                </AnimatedElement>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section with Image and Bullet Points */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement animation="fadeUp" delay={700}>
            <h2 className="text-xl font-semibold text-dark-font mb-2">
              Sportpszichiátriai szolgáltatások, mentális segítségnyújtás
            </h2>
            </AnimatedElement>
            

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Side - Bullet Points */}
              <div className="lg:col-span-2">

                <AnimatedElement animation="fadeUp" delay={700}>
                <ul className="space-y-1 text-dark-font leading-relaxed ml-4 md:ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Tanácsadás, konzultáció
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Diagnosztika
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-1 flex-shrink-0"></span>
                    Az ok keresése, a sportoló személyiségének megfelelő terápiás eszköz megtalálása, megtanítása és a
                    rutin kialakítása
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Versenyekre történő mentális felkészítés
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Versenyszorongás, teljesítményszorongás csökkentése
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Mentális blokkok oldása
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Stresszkezelés
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Versenyhelyzetekben nyújtott teljesítmény fokozása, stabilizálása
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Mentális tréning
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Csapatépítés, csapatkohézió
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Burn out felismerése, kezelése
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Igény és szükség esetén edzőkkel való konzultáció, egyben edukáció (önismeret, saját viselkedés
                    tudatosítása, a sportolók személyiségtípusának felismerése, adekvát kommunikáció gyakorlása,
                    konfliktuskezelés lehetőségei)
                  </li>
                </ul>
                </AnimatedElement>
              </div>

              {/* Right Side - Vertical Image */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={400}
                className="lg:col-span-1 flex justify-center lg:justify-end -mt-12"
              >
                <figure className="lg:w-[400px] lg:min-w-[400px]">
                  <img
                    src="\images\sportpszichiatria.jpg"
                    alt="Sportpszichiátria művészeti ábrázolás - színes rajz lépcsőkkel élénk színekben, a sportpszichológiai fejlődés és előrehaladás szimbóluma"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto", width: "400px" }}
                    loading="lazy"
                  />
                </figure>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageWrapper>
  )
}
