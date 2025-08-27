import type { Metadata } from "next"
import Link from "next/link";
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Szorongásoldás - Dr. Erdélyi Kálmán",
  description:
    "Szorongásoldás relaxációs és pszichológiai módszerekkel segít testi-lelki egyensúly visszaállításában, lelki okok feltárásában és tartós megnyugvásban.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/terapias-modszereim/szorongasoldas-szorongas-kezelese",
  },
  openGraph: {
    title: "Szorongásoldás - Dr. Erdélyi Kálmán",
    description:
      "Szorongásoldás relaxációs és pszichológiai módszerekkel segít testi-lelki egyensúly visszaállításában, lelki okok feltárásában és tartós megnyugvásban.",
    //url: "https://www.erdelyimental.hu/terapias-modszereim/szorongasoldas-szorongas-kezelese",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function SzorongasoldásPage() {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title */}
              <AnimatedElement animation="fadeUp" delay={0}>
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Szorongásoldás</h1>
              </div>
              </AnimatedElement>

              {/* Right Side - Quote */}
              <AnimatedElement
                animation="slideLeft"
                delay={200}
                className="flex flex-col items-end"
                as="figure"
              >
                  <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"...boldog a csönd,</p>
                    <p className="ml-1">ha meghalhat az emberi daltól."</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Weöres Sándor: Boldog/</cite>
                </figcaption>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Single Column Content */}
            <div className="space-y-2">
              <AnimatedElement animation="fadeUp" delay={300}>
              <p className="text-dark-font leading-relaxed mb-2">
                Minden egészséges ember tud szorongani, ha megfelelően működik a lelkiismerete. Az a szorongás kóros
                mértékű, amely felborítja a testi és lelki egyensúlyunkat és befolyásolja kapcsolati életünket is. Azt a
                szorongást nem kell csökkenteni, amely elősegíti erőink bevetését egy problémahelyzet megoldásában. Az
                azonban már káros és tüneti, ha a szorongás bénulttá és tehetetlenné tesz, elszívja erőinket és
                debilizálja gondolkodásunkat („Se kép, se hang állapot"). Ilyenkor van szükségünk a szorongás
                feloldására különféle pszichológiai módszerek bevetésével.
              </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={400}>
              <p className="text-dark-font leading-relaxed mb-2">
                Alapvető szorongásoldási lehetőség a relaxáció, amelynek eltérő technikáit alkalmazzuk bizonyos
                személyiségvonásoktól függően.
              </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={500}>
              <p className="text-dark-font leading-relaxed mb-2">
                Az a személy, aki inkább az aktivitást, mozgást kedveli, gyorsabban megtanulja a progresszív relaxációt,
                amely aktív testi gyakorlatokon keresztül éri el az izmok ellazulását és az ennek következményeként
                létrejövő lelki megnyugvást.
              </p>
              </AnimatedElement>

              {/* Centered Image */}
              
              <AnimatedElement
                animation="fadeUp"
                delay={600}
                className="flex justify-center"
              >
                <figure className="lg:max-w-[540px] lg:w-[540px]">
                  <img
                    src="/images/szorongasoldas.jpg"
                    alt="Szorongásoldás művészeti ábrázolás - fa rajz kontrasztos oldalakkal, a szorongástól a belső békéig vezető utat szimbolizálva"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto", width: "540px" }}
                    loading="lazy"
                  />
                </figure>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={600}>
              <p className="text-dark-font leading-relaxed mb-2">
                Az inkább testi pihenést, nyugalmat kívánó személy számára előnyösebbek a meditatív típusú ellazító
                módszerek, amelyek belső koncentrációt, szellemi aktivitást kívánnak. Legismertebb eljárás ezek közül az
                autogén tréning. Mivel ez a módszer a szorongásoldó és ellazító eljáráson túl a lelki eredetű testi
                tünetek, az úgynevezett {" "} <Link href="/terapias-modszereim/pszichiatriai-pszichoszomatikus-zavarok-komplex-gyogyszeres-pszichoterapias-kezelese" className="text-dark-blue underline hover:text-dark-blue/80">pszichoszomatikus zavarok gyógyításában</Link>{" "} is fontos szerepet játszik, ezért bővebb
                ismertetésére a {" "} <Link href="/terapias-modszereim/stresszkezeles-stresszoldas" className="text-dark-blue underline hover:text-dark-blue/80">stresszkezelés</Link>{" "} kapcsán kerül sor.
              </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={600}>
              <p className="text-dark-font leading-relaxed mb-2">
                A szorongás tárgynélküli félelem mivoltából következik, hogy a lelki feltárás útjait is célszerű
                végigjárnunk megkeresve azokat a mély, rejtett, elfojtott okokat, sokszor koragyermekkori élményeket,
                amelyekből a szorongás ered.
              </p>
              

              <p className="text-dark-font leading-relaxed">
                Hasznos, ha együtt alkalmazzuk az testi lazítást az okok lelki feltárásával.
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
