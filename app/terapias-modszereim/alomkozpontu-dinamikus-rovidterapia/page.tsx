import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Álomközpontú dinamikus rövidterápia - Dr. Erdélyi Kálmán",
  description:
    "Az álomközpontú dinamikus rövidterápia az álmok elemzésével tárja fel a rejtett lelki feszültségeket, és segít hatékony megoldásokat találni.",
  alternates: {
    canonical: "/alomkozpontu-dinamikus-rovidterapia",
  },
  openGraph: {
    title: "Álomközpontú dinamikus rövidterápia – Dr. Erdélyi Kálmán",
    description:
      "Az álomközpontú dinamikus rövidterápia az álmok elemzésével tárja fel a rejtett lelki feszültségeket, és segít hatékony megoldásokat találni.",
    //url: "https://www.erdelyimental.hu/alomkozpontu-dinamikus-rovidterapia",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function AlomkozpontuTerapiaPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font lg:w-[600px] max-w-[600px]">Álomközpontú dinamikus rövidterápia</h1>
              </div>

              {/* Right Side - Quote */}
              <figure className="flex flex-col items-end">
                <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed mb-2">
                    <p>"Akkor tűn el igaz világunk,</p>
                    <p className="ml-1">ha reggelenként ébredünk,</p>
                    <p className="ml-1">s akkor igaz valónkba látunk,</p>
                    <p className="ml-1">ha álmokat néz húnyt szemünk?"</p>
                </blockquote>
                <figcaption className="text-left">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">
                    /Kosztolányi Dezső: Plató olvasása közben/
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2 lg:col-span-2">
                <p className="text-dark-font leading-relaxed mb-2">
                  Petőfi jól ismert verse („Jövendölés") pontosan fogalmazza meg azt az igazságot, amit a szakemberek
                  régóta tudnak és a tudományos kutatások is bizonyítanak: Álmaink képi nyelven fogalmazzák meg és
                  fejezik ki rejtett vágyainkat és magunkban hordozott feszültségeinket.
                </p>

                <p className="text-dark-font leading-relaxed mb-2">
                  Az álombeszéd nyelve a kép, amely szimbolikusan jeleníti meg érzelmi tudatunk üzenetét. Ez a nyelv
                  sűrítetten hordozza mondanivalóját és sajátos törvényszerűségeket fedezhetünk fel benne. Ezeket az
                  álomelemzés során megismerjük és megtanuljuk használni. Az álom bölcs üzeneteket tud kifejezni és
                  megjeleníteni szervezetünk egészségéről vagy betegségéről, lelki problémáinkról és kapcsolati
                  zavarainkról. Új rálátásokhoz és megoldásokhoz segít bennünket.
                </p>

                <p className="text-dark-font leading-relaxed mb-2">
                  Az álomelemzés módszerét ebben a különleges terápiás folyamatban magunk is megtanuljuk, ugyanakkor
                  ezzel a módszerrel megértjük a legrejtettebb lelki feszültségeinket is. Ennek a terápiának az a
                  haszna, hogy a képek „rejtjeles üzeneteit megtanuljuk megfejteni és ezt a tudást a továbbiakban magunk
                  is felhasználhatjuk.
                </p>
                <p className="text-dark-font leading-relaxed">
                  Az álomelemző rövidterápia kizárólag álmokkal dolgozik, ezért intenzív és koncentrált lelki munkát
                  kíván és a tapasztalat szerint segít rövid idő alatt feltárni és „kibogozni" a lelki problémákat.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end -mt-8">
                <figure className="w-full max-w-md">
                  <img
                    src="\images\alomkozpontu-terapia.jpg"
                    alt="Álomközpontú terápia művészeti ábrázolás - fekete-fehér vázlat folyó vonalakkal és organikus formákkal, az álmok és tudattalan tartalmak szimbóluma"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
