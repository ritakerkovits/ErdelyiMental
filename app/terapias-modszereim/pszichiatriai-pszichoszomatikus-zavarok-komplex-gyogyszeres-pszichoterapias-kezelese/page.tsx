import type { Metadata } from "next"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Pszichiátriai és pszichoszomatikus zavarok komplex kezelése - Dr. Erdélyi Kálmán",
  description:
    "Pszichiátriai és pszichoszomatikus zavarok komplex kezelése gyógyszeres és pszichoterápiás módszerekkel a testi és lelki egyensúly helyreállításáért.",
  alternates: {
    canonical: "/pszichiatriai-pszichoszomatikus-zavarok-komplex-gyogyszeres-pszichoterapias-kezelese",
  },
  openGraph: {
    title: "Pszichiátriai és pszichoszomatikus zavarok komplex kezelése – Dr. Erdélyi Kálmán",
    description:
      "Pszichiátriai és pszichoszomatikus zavarok komplex kezelése gyógyszeres és pszichoterápiás módszerekkel a testi és lelki egyensúly helyreállításáért.",
    //url: "https://www.erdelyimental.hu/pszichiatriai-pszichoszomatikus-zavarok-komplex-gyogyszeres-pszichoterapias-kezelese",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function PszichiátriaKezelésPage() {
  return (
    <PageWrapper>
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-light-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[5fr_2fr] gap-12 items-start">
              {/* Left Side - Title */}
              <AnimatedElement animation="fadeUp" delay={0}>
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-dark-font lg:max-w-[700px]">
                  Pszichiátriai és pszichoszomatikus zavarok komplex (gyógyszeres és pszichoterápiás) kezelése
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
                  <blockquote className=" text-left text-dark-grey text-sm md:text-base italic font-medium leading-relaxed">
                    <p>"Szerencse énvelem is gyakorta mulat,</p>
                    <p className="ml-1">Mind édeset, keserűt egyaránt mutat."</p>
                  </blockquote>
                <figcaption className="text-right mt-1">
                  <cite className="text-dark-grey text-xs md:text-sm italic font-medium">/Zrínyi Miklós: Szigeti veszedelem, 1651/</cite>
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
            <div className="grid lg:grid-cols-[3fr_1.5fr] gap-6 items-start">
              {/* Left Side - Content Paragraphs */}
              <div className="space-y-2">
                <AnimatedElement animation="fadeUp" delay={300}>
                <p className="text-dark-font leading-relaxed mb-2">
                  A pszichiátriai és pszichoterápiás gyógyító tevékenység szorosan összefonódó területét képezik a
                  pszichiátriai zavarok, amelyekben a terápiás támadáspont egyaránt irányul a tudásunk mai szintjén
                  feltárt biológiai, biokémiai folyamatokra és a lelki valamint kapcsolati működészavarokra. Minden
                  mentális rendellenességnek van pszichológiai és szociális vetülete, ezért a komplex gyógyítás az ember
                  bio-pszicho-szociális egészére irányul.
                </p>
                </AnimatedElement>
                <AnimatedElement animation="fadeUp" delay={400}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Hasonló a helyzet a stresszbetegségeknél, pszichoszomatikus zavaroknál is, amelyek kiváltásában,
                  fenntartásában valamint kiújulásában a lelki tényezőknek meghatározó szerepük van, mégsem tisztán
                  lelki eredetűek. Ugyanakkor gyakorta a szervi működések károsodásával járnak (pl.: gyomorfekély, vérző
                  vastagbélgyulladás, ischaemiás szívbetegség).
                </p>
                </AnimatedElement>

                <AnimatedElement animation="fadeUp" delay={500}>
                <p className="text-dark-font leading-relaxed mb-2">
                  Ilyen esetekben a gyógyításnak minden szférára ki kell terjednie és szükséges a különböző kezelésmódok
                  összehangolása.
                </p>
                </AnimatedElement>
              </div>

              {/* Right Side - Image */}
              
              <AnimatedElement
                animation="slideLeft"
                delay={400}
                className="flex justify-center lg:justify-end -mt-6"
              >
                <figure className="lg:w-[480px] lg:min-w-[480px]">
                  <img
                    src="\images\pszichoszomatikus-zavarok.jpg"
                    alt="Pszichoszomatikus kezelés művészeti ábrázolás - színes rajz emberi alakkal és energiasugárzással, a test-lélek kapcsolat szimbóluma"
                    className="h-auto object-cover"
                    style={{maxWidth:"100%", height: "auto", width: "480px"}}
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
