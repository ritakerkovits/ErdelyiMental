import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Életvezetési tanácsadás - Dr. Erdélyi Kálmán",
  description:
    "Az életvezetési tanácsadás közös gondolkodással segít új megoldásokat találni, elakadások feloldásában és a saját út megtalálásában.",
  alternates: {
    canonical: "/eletvezetesi-tanacsadas",
  },
  openGraph: {
    title: "Életvezetési tanácsadás – Dr. Erdélyi Kálmán",
    description:
      "Az életvezetési tanácsadás közös gondolkodással segít új megoldásokat találni, elakadások feloldásában és a saját út megtalálásában.",
    //url: "https://www.erdelyimental.hu/eletvezetesi-tanacsadas",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function EletvezetesiTanacsadasPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Életvezetési tanácsadás</h1>
              </div>

              {/* Right Side - Quote and Author */}
              <div className="flex flex-col items-end">
                {/* Quote - Left aligned within its container */}
                <div className="text-left">
                  <div className="text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p className="italic">"Imádom a határozatlant, a törékeny hangokat és színeket.</p>
                    <p className="italic ml-1"> Mindazt, ami remeg, hullámzik és borzong és csillog.</p>
                    <p className="italic ml-1"> A hajat és a szemet, a falevelet, a selymet</p>
                    <p className="italic ml-1"> És a törékeny formák szellemiségét.”</p>
                  </div>
                </div>
                {/* Author - Right aligned with 4px spacing */}
                <div className="text-right mt-1">
                  <p className="text-dark-grey text-xs md:text-sm italic font-medium">/Albert Samain: Dilection/</p>
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
                  Az elnevezésben foglalt „tanácsadás” kifejezés azt a látszatot keltheti, hogy életének megoldatlan problémáira a terapeuta tudja a biztos választ és ő az, aki ezt meg is mondja önnek. A tanácsadás azonban valójában „tanácskozást”, közös tanakodást jelent.
                </p>

                <p className="text-dark-font leading-relaxed mb-2">
                  Az ember önmagában örvényszerűen és kiúttalanul forog saját problémáiban. Aki kívülről belép, az megszakítja a terméketlen spekulációkat. A terapeuta pedig éppen azt tudja, hogy mikor, milyen módon érdemes belépni és elősegíteni azt, hogy felszabaduljon a sokféle megoldási ötlet. Így terápiás segítséggel önmaga talál rá a saját útjára és megoldására.
                </p>

                <p className="text-dark-font leading-relaxed">
                  Ahogyan másnak a cipője nem jó a lábunkra, úgy mások ötleteit és javaslatait sem tudjuk eredményesen felhasználni. Amíg saját ötleteinkből használható cselekvési terv születik, szükség van kiérlelő folyamatra. Ezt az utat nevezzük életvezetési tanácsadásnak.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end -mt-8">
                <figure className="w-full max-w-md">
                  <img
                    src="/images/eletvezetesi-tanacsadas.jpg"
                    alt="Életvezetési tanácsadás illusztráció - függőhíd az erdőben, szimbolizálva az életvezetési folyamat útját és a szakmai támogatást a jövő felé vezető úton"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto", width:"380px" }}
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
