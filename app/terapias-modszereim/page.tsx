import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Terápiás módszereim - Dr. Erdélyi Kálmán",
  description:
    "Terápiás módszereim között szerepel az önismeretfejlesztés, életvezetési tanácsadás, kapcsolati nehézségek és szorongásoldás, és további más szakmai szolgáltatások.",
  alternates: {
    canonical: "/terapias-modszereim",
  },
  openGraph: {
    title: "Dr. Erdélyi Kálmán - Pszichiáter és Pszichoterapeuta",
    description:
      "Terápiás módszereim között szerepel az önismeretfejlesztés, életvezetési tanácsadás, kapcsolati nehézségek és szorongásoldás, és további más szakmai szolgáltatások.",
    images: [
      {
        url: "/images/og-logo.jpg", 
        width: 1200, 
        height: 630,
        alt: "Dr. Erdélyi Kálmán logo",
      },
    ],
  },  
}

export default function TerapiasModszereimPage() {
  const therapyMethods = [
    {
      icon: "custom", 
      title: "Önismeret",
      description: "Szeretné jobban megismerni, megérteni és kontrollálni Önmagát?",
      link: "/terapias-modszereim/onismereti-terapia-onfejlesztes",
    },
    {
      icon: "eletvezetesi", 
      title: "Életvezetési tanácsadás",
      description: "Van-e segítőtársa életvezetési problémáinak megoldásában?",
      link: "/terapias-modszereim/eletvezetesi-tanacsadas",
    },
    {
      icon: "parkapcsolati", 
      title: "(Pár)kapcsolati nehézségek rendezése",
      description: "Ki segíti Önt párkapcsolati, családi és munkahelyi kapcsolati nehézségeiben?",
      link: "/terapias-modszereim/kapcsolati-nehezsegek-kezelese",
    },
    {
      icon: "szorongasoldas",
      title: "Szorongásoldás",
      description: "Mit kezd a szorongásával? Mi rejtőzködhet annak hátterében?",
      link: "/terapias-modszereim/szorongasoldas-szorongas-kezelese",
    },
    {
      icon: "stresszkezeles", 
      title: "Stresszkezelés",
      description: "Tudja-e, mit tegyen, ha fokozott stressznek van kitéve, kifáradt, kimerült?",
      link: "/terapias-modszereim/stresszkezeles-stresszoldas",
    },
    {
      icon: "imaginacio", 
      title: "Lelki munka belső képekkel (imagináció) és álomelemzés",
      description: "Szeretné megtudni, mit üzennek álmai?",
      link: "/terapias-modszereim/lelki-munka-belso-kepekkel-imaginacio-es-alomelemzes",
    },
    {
      icon: "lelki-utak", 
      title: "Rejtett lelki utak vizuális megjelenítése, rajz-, szimbólum elemzés",
      description: "Hogyan gazdálkodik lelki erőivel, tudattalanja mély bölcsességével?",
      link: "/terapias-modszereim/vizualis-terapia-rajz-es-szimbolum-elemzes",
    },
    {
      icon: "pszichoszomatikus", 
      title: "Pszichiátriai és pszichoszomatikus zavarok gyógyszeres és pszichoterápiás kezelése",
      description: "Depressziós? Pánik tünetek gyötrik? Pszichoszomatikus betegsége van?",
      link: "/terapias-modszereim/pszichiatriai-pszichoszomatikus-zavarok-komplex-gyogyszeres-pszichoterapias-kezelese",
    },
  ]

  const specialties = [
    {
      title: "Sportpszichiátria. Sportolók, élsportolók számára mentális segítségnyújtás",
      link: "/terapias-modszereim/sportpszichiatria-sportolok-mentalis-segitseg",
    },
    {
      title: "Álomközpontú dinamikus rövidterápia",
      link: "/terapias-modszereim/alomkozpontu-dinamikus-rovidterapia",
    },
    {
      title: "Csoportterápia - Csoportpszichoterápia",
      link: "/terapias-modszereim/csoportterapia-csoportpszichoterapia",
    },
  ]

  return (
    <PageWrapper>
    <div className="min-h-screen">
      {/* Main Therapy Methods Section */}
      <section className="py-16 bg-peach" >
        <div className="container mx-auto px-4 pt-16 lg:pt-20">
          <div className="max-w-6xl mx-auto">
            <AnimatedElement animation="fadeUp" delay={0}>
            <h1 className="text-2xl md:text-3xl font-medium text-dark-font mb-12">Önismereti és terápiás módszereim</h1>
            </AnimatedElement>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {therapyMethods.map((method, index) => {
                return (
                  <AnimatedElement key={index} animation="fadeUp" delay={100 + index * 100}>
                        <article role="listitem"></article>
                  <Link
                    key={index}
                    href={method.link}
                    className="group block bg-white rounded-tr-lg rounded-br-lg border-l-4 border-dark-blue shadow-sm hover:shadow-lg hover:border-2 hover:border-dark-blue hover:border-l-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dark-blue focus:ring-offset-2 h-auto lg:h-[214px]"
                  >
                    <article className="p-6 lg:p-5 h-full flex flex-col md:flex-row">
                      {/* Icon Section - Left Side */}
                      <div className="flex-shrink-0 flex items-center mr-6 mb-4 lg:mb-0 lg:mr-5">
                        {method.icon === "custom" ? (
                          <Image
                            src="/images/onismeret-icon.svg"
                            alt="Önismeret ikon - belső tükör és önreflexió szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                            priority={index === 0}
                          />
                        ) : method.icon === "eletvezetesi" ? (
                          <Image
                            src="/images/eletvezetesi-icon.svg"
                            alt="Életvezetési tanácsadás ikon - útmutatás és támogatás szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "parkapcsolati" ? (
                          <Image
                            src="/images/parkapcsolati-icon.svg"
                            alt="Párkapcsolati nehézségek ikon - kapcsolatok és együttműködés szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "szorongasoldas" ? (
                          <Image
                            src="/images/szorongasoldas-icon.svg"
                            alt="Szorongásoldás ikon - nyugalom és belső béke szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "stresszkezeles" ? (
                          <Image
                            src="/images/stresszkezeles-icon.svg"
                            alt="Stresszkezelés ikon - egyensúly és relaxáció szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "imaginacio" ? (
                          <Image
                            src="/images/imaginacio-icon.svg"
                            alt="Imagináció és álomelemzés ikon - belső képek és álmok szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "lelki-utak" ? (
                          <Image
                            src="/images/lelki-utak-icon.svg"
                            alt="Vizuális megjelenítés ikon - kreatív kifejezés és művészeti terápia szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : method.icon === "pszichoszomatikus" ? (
                          <Image
                            src="/images/pszichoszomatikus-icon.svg"
                            alt="Pszichiátriai kezelés ikon - komplex gyógyítás és orvosi támogatás szimbóluma"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                          />
                        ) : null}
                      </div>

                      {/* Content Section - Right Side */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-dark-font font-medium mb-4 lg:mb-3 leading-relaxed text-base">
                            {method.description}
                          </p>
                          <h2 className="font-semibold text-dark-font text-lg mb-6 lg:mb-4">{method.title}</h2>
                        </div>

                        {/* Részletek link positioned at bottom */}
                        <div className="mt-auto">
                          <span className="inline-flex items-center text-dark-blue group-hover:text-dark-font transition-colors duration-300 text-base font-medium">
                            Részletek
                            <ArrowRight
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              size={16}
                            />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                  </AnimatedElement>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-peach pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Title - Vertically Centered */}
              
              <AnimatedElement
                    animation="slideRight"
                    delay={900}
                    className="lg:pr-8 flex items-center justify-center lg:justify-start text-center lg:text-left"
                    as="header"
                  >
                <h2 className="text-2xl md:text-3xl font-medium text-dark-font leading-tight">
                  Ismerje meg
                  <br />
                  kiemelt szakterületeimet
                </h2>
                </AnimatedElement>
              

              {/* Right Side - Specialty Cards */}
              <div className="space-y-4">
                {specialties.map((specialty, index) => (
                  <AnimatedElement key={index} animation="slideLeft" delay={1000 + index * 150}>
                          
                  <Link
                    key={index}
                    href={specialty.link}
                    className="block bg-dark-blue text-light-font p-6 rounded-lg hover:bg-dark-blue/90 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-light-font text-lg font-medium leading-relaxed pr-4">{specialty.title}</span>
                      <ArrowRight
                        className="text-light-font flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                        size={24}
                      />
                    </div>
                  </Link>
                  
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageWrapper>
  )
}
