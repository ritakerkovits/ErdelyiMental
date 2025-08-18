import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Önismeret - Dr. Erdélyi Kálmán",
  description:
    "Az önismereti munka segít feltárni viselkedésünk mozgatórugóit, leküzdeni gátjainkat és finom változásokkal javítani életminőségünket.",
  alternates: {
    canonical: "/onismereti-terapia-onfejlesztes",
  },
  openGraph: {
    title: "Önismeret – Dr. Erdélyi Kálmán",
    description:
      "Az önismereti munka segít feltárni viselkedésünk mozgatórugóit, leküzdeni gátjainkat és finom változásokkal javítani életminőségünket.",
    //url: "https://www.erdelyimental.hu/onismereti-terapia-onfejlesztes",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function OnismeretPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Önismeret</h1>
              </div>

              {/* Right Side - Quote and Author */}
              <div className="flex flex-col items-end">
                {/* Quote - Left aligned within its container */}
                <div className="text-left">
                  <div className="text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"Jaj, be szép, hogy vagyok,</p>
                    <p className="ml-1">Jaj, be szép, hogy vagynak.</p>
                    <p className="ml-1">Jaj, be szép, hogy minden Való szép,</p>
                    <p className="ml-1">Jaj, be szép a Szép."</p>
                  </div>
                </div>

                {/* Author - Right aligned with 4px spacing */}
                <div className="text-right mt-1">
                  <p className="text-dark-grey text-xs md:text-sm italic font-medium">/Ady Endre: Szép a Szép/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2 lg:col-span-2">
                <p className="text-dark-font leading-relaxed mb-2">
                  Általános vélemény, hogy az önismeret arra a kérdésre válaszol, „milyen vagyok?". Ez azonban tévedés
                  és leegyszerűsítés. Az emberi viselkedés hosszú tanulás eredménye és ezért az önismeret igazi kérdése:
                  „hogyan váltam ilyenné?"
                </p>

                <p className="text-dark-font leading-relaxed mb-2">
                  Általában "a másiktól" várjuk el, hogy változzon meg, pedig ezt mindig saját magunknál kell kezdenünk.
                  Elhatározásra vagy parancsra azonban épp úgy nem változunk meg, mint ahogyan az újévi fogadalmainkat
                  sem tudjuk teljesíteni. Az önismereti munka azt jelenti, hogy fokról fokra egyre jobban megismerjük
                  viselkedésünk mozgatórugóit és azokat a gyengéinket, amelyek a nem kívánt viselkedést előidézik. A
                  változás leheletfinoman, észrevétlenül történik, melyet környezetünk pozitív visszajelzéseiből is
                  érezhetünk.
                </p>

                <p className="text-dark-font leading-relaxed">
                  Azt pedig, hogy ezen az úton hogyan lehet végighaladni, megtudhatja, ha kipróbálja, milyen is egy
                  ilyen folyamatban benne lenni.
                </p>
              </div>
              <div className="lg:col-span-1">
                {/* Right Side - Image */}
                <div className="flex justify-center lg:justify-end -mt-8">
                  <figure className="lg:w-full max-w-md">
                    <img
                      src="/images/onismeret.jpg"
                      alt="Önismeret lépcső illusztráció - spirális kőlépcső felülről nézve, az önmegismerés útjának szimbóluma"
                      className="w-full h-auto object-cover"
                      style={{ maxWidth: "100%", height: "auto" , width: "420px"}}
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
