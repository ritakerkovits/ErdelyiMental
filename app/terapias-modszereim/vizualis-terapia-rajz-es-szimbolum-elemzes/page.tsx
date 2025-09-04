import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Rejtett lelki utak vizuális megjelenítése - Dr. Erdélyi Kálmán",
  description:
    "A szimbólumelemzés és rajzelemzés képi kifejezésen keresztül segít feldolgozni lelki terheket, csökkenteni feszültséget és támogatni az érzelmi gyógyulást.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/terapias-modszereim/vizualis-terapia-rajz-es-szimbolum-elemzes",
  },
  openGraph: {
    title: "Rejtett lelki utak vizuális megjelenítése - Dr. Erdélyi Kálmán",
    description:
      "A szimbólumelemzés és rajzelemzés képi kifejezésen keresztül segít feldolgozni lelki terheket, csökkenteni feszültséget és támogatni az érzelmi gyógyulást.",
    images: ["/images/og-logo.jpg"],
  }, 

}

export default function VizualisMegjelenitésPage() {
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
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font lg:w-[600px]">
                  Rejtett lelki utak vizuális megjelenítése, rajz-, szimbólum elemzés
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
                  <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"A táj az ismeretlen mélybe kékül,</p>
                    <p className="ml-1">nincs semmi nesz a lombokon, a fán,</p>
                    <p className="ml-1">s tűz- csókokat kapok a tiszta égtül</p>
                    <p className="ml-1">Én, a merész és álmodó parány."</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Kosztolányi Dezső: Egyedül/</cite>
                </figcaption>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2">
                <AnimatedElement animation="fadeUp" delay={300}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Az a munkamód, ahogy az álom dolgozik, mintát kínál számunkra ahhoz, hogyan dolgozzunk belső képekkel
                  és belső utakon. Problémáink feldolgozásában a képi áttétel módot ad arra, hogy a számunkra fájdalmas
                  vagy megoldhatatlannak érzett problémákat képi áttétellel feldolgozhassuk.
                </p>
                </AnimatedElement>
                <AnimatedElement animation="fadeUp" delay={400}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Ha például bánatunkat szeretnénk gondozni, enyhíteni a feszültséget, akkor a bánat többféle módon
                  jeleníthető meg. Például lerajzolhatjuk, színek alkalmazásával megjeleníthetjük, lefesthetjük,
                  gyurmából megformálhatjuk, sőt mozgásban is kifejezhetjük és így az áttétel során a benne foglalt és
                  hozzá tartozó feszültséget is csökkenteni tudjuk.
                </p>
                </AnimatedElement>
              </div>

              {/* Right Side - Image */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={300}
                className="flex justify-center lg:justify-end -mt-6"
              >
                <figure className="lg:w-full max-w-md">
                  <img
                    src="/images/szimbolumelemzes.jpg"
                    alt="Rejtett lelki utak vizuális megjelenítése - színes, komplex művészeti alkotás sokféle mintával és szimbólummal, a lélek rejtett útjainak ábrázolása"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto" }}
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
