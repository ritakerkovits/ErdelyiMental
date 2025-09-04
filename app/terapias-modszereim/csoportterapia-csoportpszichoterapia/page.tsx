import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Csoportterápia - Csoportpszichoterápia - Dr. Erdélyi Kálmán",
  description:
    "A csoportterápia és csoportpszichoterápia a közösség erejével segít lelki problémák feldolgozásában, önismeret fejlesztésében és gyógyulásban.",
  alternates: {
    canonical: "https://www.erdelyimental.hu/terapias-modszereim/csoportterapia-csoportpszichoterapia",
  },
  openGraph: {
    title: "Csoportterápia - Csoportpszichoterápia - Dr. Erdélyi Kálmán",
    description:
      "A csoportterápia és csoportpszichoterápia a közösség erejével segít lelki problémák feldolgozásában, önismeret fejlesztésében és gyógyulásban.",
    images: ["/images/og-logo.jpg"],
  },  
}

export default function CsoportterapiaPage() {
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
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font lg:w-[800px]">Csoportterápia - Csoportpszichoterápia</h1>
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
                    <p>"Szemem tavában magadat látod:</p>
                    <p className="ml-1">Mint tükröd, vagyok leghűbb barátod.</p>
                    <p className="ml-1">Mint tükröd, vagyok leghűbb barátod:</p>
                    <p className="ml-1">Szemem tavában magadat látod"</p>
                  </blockquote>
                <figcaption className="text-right">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">
                    <p>/Weöres Sándor: Ki minek gondol,</p>
                    <p>az vagyok annak.../</p>
                  </cite>
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
            <div className="grid lg:grid-cols-[3fr_1.5fr] gap-8 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2">
                <AnimatedElement animation="fadeUp" delay={300}>
                <p className="text-dark-font leading-relaxed mb-2">
                  A pszichológia alaptétele, hogy az ember veleszületetten társas lény. Szükségünk van egymás
                  figyelmére, közelségére, megértésére és az érzelmi kapcsolatok megélésére. Az együttes élmény
                  elmélyíti a tapasztalást, felfokozza a megértési képességet és erősíti a közösségi érzéseket. A
                  csoportterápia ezeket a csoportban rejlő erőket használja fel különböző témák vagy közös feladatok
                  feldolgozásán keresztül.
                </p>
                </AnimatedElement>
                <AnimatedElement animation="fadeUp" delay={400}>
                <p className="text-dark-font leading-relaxed mb-2">
                  A csoportpszichoterápia pedig továbblép és a csoporttagok feltárják egymás előtt lelki problémáikat,
                  amelyek a zárt és védett lélektani térben megbeszélésre, feldolgozásra kerülnek. A kölcsönös bizalom,
                  megértés és támogatás légkörében olyan lelki erők szabadulnak fel és lépnek működésbe, amelyek az
                  állapotrendeződést és a gyógyulást hatékonyabbá és eredményesebbé teszik.
                </p>
                </AnimatedElement>
              </div>

              {/* Right Side - Image */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={400}
                className="flex justify-center lg:justify-end lg:-mt-6"
                
              >
                <figure className="lg:w-[500px]">
                  <img
                    src="\images\csoportterapia.jpg"
                    alt="Csoportterápia illusztráció - arany figurák ülnek egy asztal körül nagy izzóval a közepén, szimbolizálva a csoportos terápiás munkát és közös megértést"
                    className="h-auto object-cover"
                    style={{ maxWidth: "100%", height: "auto", width:"500px" }}
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
