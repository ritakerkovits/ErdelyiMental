import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Párkapcsolati nehézségek rendezése - Dr. Erdélyi Kálmán",
  description:
    "Párkapcsolati tanácsadás és terápia a konfliktusok kezelésére, kommunikáció javítására és érzelmi közeledés elősegítésére a tartós harmónia érdekében.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/terapias-modszereim/kapcsolati-nehezsegek-kezelese",
  },
  openGraph: {
    title: "Párkapcsolati nehézségek rendezése - Dr. Erdélyi Kálmán",
    description:
      "Párkapcsolati tanácsadás és terápia a konfliktusok kezelésére, kommunikáció javítására és érzelmi közeledés elősegítésére a tartós harmónia érdekében.",
    images: ["/images/og-logo.jpg"],
  },  
}

export default function KapcsolatiNehezségekPage() {
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
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font">Párkapcsolati nehézségek rendezése</h1>
              </div>
              </AnimatedElement>
              {/* Right Side - Quote and Author */}
              <AnimatedElement
                animation="slideLeft"
                delay={200}
                className="flex flex-col items-end"
                as="figure"
              >
                {/* Quote - Left aligned within its container */}
                  <blockquote className="text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"A gyepet nézem, talán a gyepet. </p>
                    <p className="ml-1">Mozdul a fű. Szél vagy zápor talán</p>
                    <p className="ml-1">Vagy egyszerűen az, hogy létezel</p>
                    <p className="ml-1">Mozdítja meg itt és most a világot."</p>
                  </blockquote>

                {/* Author - Right aligned with 4px spacing */}
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Pilinszky János: Itt és Most/</cite>
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
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2 lg:col-span-2">
                <AnimatedElement animation="fadeUp" delay={300}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Életünk legfontosabb színtere a család, ezen belül a párkapcsolat. Minél közelebb állunk érzelmileg
                  valakihez, annál szabadabban tudjuk kinyilvánítani, mi tetszik és mi nem, s hogyan viszonyulunk hozzá.
                  Például haraggal, indulattal, kritikával, szeretettel, aggodalommal, féltéssel. Ezért a párkapcsolat,
                  a családi élet lehet „harcmező és békesziget".
                </p>
                </AnimatedElement>
                <AnimatedElement animation="fadeUp" delay={400}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Ha közömbösek volnának szeretteink, akkor sohasem lenne konfliktusunk, viszont közünk sem lenne
                  igazából egymáshoz. Amíg csatázni tudunk, addig van érzelmi tőkénk és addig van esély, hogy elromlott
                  viszonyainkon változtatni tudjunk.
                </p>
                </AnimatedElement>
                <AnimatedElement animation="fadeUp" delay={500}>
                <p className="text-dark-font leading-relaxed">
                  A párkonzultáció és terápia éppen elmérgesedett viszonyaikba belépve tud segíteni. Megtanít arra, hogy
                  kilépjenek vitáik rossz forgatókönyvéből, új módon tudjanak egymással kommunikálni, közös ügyeikben
                  tudjanak közös célokat kitűzni és érzelmileg is kedvező változást érhessenek el egymáshoz való
                  viszonyukban.
                </p>
                </AnimatedElement>
              </div>

              {/* Right Side - Image */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={400}
                className="flex justify-center lg:justify-end -mt-6"
                
              >
                <figure className="lg:w-full max-w-md">
                  <img
                    src="/images/parkapcsolati-nehezsegek.jpg"
                    alt="Párkapcsolati kötődés szobor - két összefonódó arc vagy forma kőből faragva, a kapcsolatok és kötődés szimbóluma"
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto" , width: "300px"}}
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
