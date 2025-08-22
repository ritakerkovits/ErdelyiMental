import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lelki munka belső képekkel és álomelemzés - Dr. Erdélyi Kálmán",
  description:
    "Az imagináció és álomelemzés belső képekkel segít feltárni a tudattalan üzeneteit, oldani lelki feszültségeket és támogatni a mély érzelmi változást.",
  alternates: {
    canonical: "/lelki-munka-belso-kepekkel-imaginacio-es-alomelemzes",
  },
  openGraph: {
    title: "Lelki munka belső képekkel és álomelemzés – Dr. Erdélyi Kálmán",
    description:
      "Az imagináció és álomelemzés belső képekkel segít feltárni a tudattalan üzeneteit, oldani lelki feszültségeket és támogatni a mély érzelmi változást.",
    //url: "https://www.erdelyimental.hu/lelki-munka-belso-kepekkel-imaginacio-es-alomelemzes",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function AlomelemzésPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">
                  Lelki munka belső képekkel (imagináció) és álomelemzés
                </h1>
              </div>

              {/* Right Side - Quote */}
              <figure className="flex flex-col items-end">
                  <blockquote className="text-left text-dark-grey  text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"A hullámok, a hullámok, tenger-habból hogy meg árok,"</p>
                    <p className="ml-1">"fodrosulnak a hullámok, a hullámok, mint az álmok,"</p>
                    <p className="ml-1">"part-szegélyről visszahullnak a hullámok, a hullámok."</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Weöres Sándor: Tengermozgás/</cite>
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
            {/* Grid layout with image positioned top right */}
            <div className="grid lg:grid-cols-[3fr_1.5fr] gap-1 items-start">
              {/* Left column - Text content */}
              <div className="space-y-2">
                <p className="text-dark-font leading-relaxed mb-2">
                  Kétfajta gondolkodásra vagyunk képesek. Az egyik az éber tudati racionális gondolkodás, amely képes az
                  absztrakcióra és alá van rendelve a valóságtörvényeknek. A másik gondolkodási lehetőségünk a konkrét,
                  szemléletes, érzékletes, élményvezérelt úgynevezett szimbolikus gondolkodás. Ez túlnyomóan képekkel
                  történik és az érzékszervek erőteljesen bevonódnak a képi-képzeleti gondolkodás folyamatába. Ehhez
                  azonban belső koncentrációra, erőteljes befelé figyelésre, azaz tudatállapot módosításra van
                  szükségünk.
                </p>

                <p className="text-dark-font leading-relaxed mb-2">
                  A természet is gondoskodik olyan tudatállapot módosításról, amelyben a racionális éber tudati
                  gondolkodás ki van kapcsolva. Ilyenkor alszunk és álomképekkel gondolkodunk.
                </p>

                <p className="text-dark-font leading-relaxed">
                  „Elmerülési" állapotnak szoktuk nevezni azt a folyamatot, amelyben a figyelmet belső képekre irányítva
                  elmélyülünk az imaginációban és az úgynevezett éber álom  
                </p>
              </div>

              {/* Right column - Image positioned at top right */}
              <div className="lg:col-span-1">
                <figure className="lg:max-w-[500px] lg:w-[500px] lg:-mt-6 lg:pl-8 w-full">
                  <img
                    src="/images/imaginacio.jpg"
                    alt="Imagináció művészeti ábrázolás - fekete-fehér vázlat álomszerű tájjal, folyó vonalakkal és organikus formákkal, a belső képek világának szimbóluma"
                    className="h-auto object-cover"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      width: "460px",
                    }}
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>

            {/* Full width content below the grid */}
            <div className="space-y-2">
              <p className="text-dark-font leading-relaxed mb-2 -mt-2">
                folyamatokban. Maga az imagináció az imago „=" belső kép jelentéséből ered. 
                Tudományosan kidolgozott módszerek állnak a rendelkezésünkre olyan
                képek sorozatából, amelyek lelki életünkre megnyugtatólag, gyógyítólag hatnak és amelyek megidézésével
                tudatunk mélyén jelentős változásokat tudunk elindítani.
                A lelki élet spontán imaginatív természke az álom, amely képekben beszéli el mindazt, amit szavakban nem
                tudunk közölni. Tudattalan világunkhoz vezető „királyi út" (álom) megfejtése az álomelemzés, melyről a
                későbbiekben még szólok (lsd. Kiemelt szakterület).
              </p>

              <p className="text-dark-font leading-relaxed mb-2">
                Az érzelmi élet különböző súlyossági fokú zavaraiban megnyilvánuló neurózisok a belső képekkel,
                szimbólumokkal végzett munkára igen jól reagálnak. Olyan érzelmi változásokat tudnak előidézni, amelyek
                nem pusztán a testi tünetek csitulását eredményezik, hanem személetünk és életfilozófiánk kedvező
                változásában is segítenek.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
