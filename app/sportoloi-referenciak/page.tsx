"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"


const testimonials = [
  {
    id: 1,
    name: "Muhari Eszter",
    title: "Párbajtőr válogatott",
    image: "/images/muhari-eszter.jpg",
    achievements: [
      "Párizs 2024 Olimpia 3. hely, női párbajtőr egyéni",
      "2x Felnőtt Európa-bajnoki ezüstérem, női párbajtőr csapat",
      "Felnőtt Világkupa 2025 Barcelona 1. hely; Marrakesh 1. hely, női párbajtőr egyéni ",
      "4x Felnőtt Országos Bajnokság 1. hely, női párbajtőr egyéni",
    ],
    shortText:
      '"Dr. Erdélyi Kálmán munkájában különösen kiemelkedő a vizualizációs technikák alkalmazása, amelyek hatékonyan segítettek a céljaim elérésében. Pár hónap közös munka során megtapasztalhattam, milyen jelentős hatása van annak, ha a mentális felkészülést strukturáltan, tudatosan végezzük..."',
    fullText:
      '"Dr. Erdélyi Kálmán munkájában különösen kiemelkedő a vizualizációs technikák alkalmazása, amelyek hatékonyan segítettek a céljaim elérésében. Pár hónap közös munka során megtapasztalhattam, milyen jelentős hatása van annak, ha a mentális felkészülést strukturáltan, tudatosan végezzük. Ez a megközelítés nemcsak az önismeret fejlesztésében segített, hanem hozzájárult egy olyan belső erőforrás mozgósításához, amely közvetlenül is támogatta a teljesítményemet. Az elért eredmények közé tartozik például az olimpiai bronzérem megszerzése. Kiemelném profi hozzáállását, amelyben a pontosság, az alkalmazkodóképesség és a fókuszált figyelem találkozik. Minden helyzethez az adott pillanat igényei szerint igazodott, miközben a hosszú távú célokat is szem előtt tartotta. Az általa alkalmazott módszerek nemcsak a sportban, hanem az élet más területein is jól hasznosíthatók, és biztos alapot nyújtanak a fejlődéshez."',
  },
  {
    id: 2,
    name: "Guzi Blanka",
    title: "Öttusa válogatott",
    image: "/images/guzi-blanka.jpeg",
    achievements: [
      "Olimpiai Játékok 2024, 4. hely",
      "Felnőtt Világbajnokság 2024, egyéni 2. hely, csapat 1. hely; 2025 váltó 2. hely",
      "Felnőtt Európa-bajnokság 2021, egyéni 2. hely, csapat 1. hely; 2025, egyéni 4. hely, csapat 1. hely, vegyes váltó 1. hely",
      "Felnőtt Világkupa 2023; 2024, 1. hely; Világkupa Döntő 2025, 3. hely",
      "Junior Európa-bajnokság 2018; 2019, 2., 3. hely",
      "Felnőtt Országos Bajnokság 2., 3. hely, 1. hely (2025)",
    ],
    shortText:
      '"Kálmánnal 2022 vége óta dolgozunk együtt rendszeresen. Talán jogosan mondhatjuk, hogy a legjobb tempóban érkezett az életembe, hiszen 2023-ban kezdődött az olimpiai kvalifikációs időszak, mely telis-tele volt magasságokkal és mélységekkel..."',
    fullText:
      '"Kálmánnal 2022 vége óta dolgozunk együtt rendszeresen. Talán jogosan mondhatjuk, hogy a legjobb tempóban érkezett az életembe, hiszen 2023-ban kezdődött az olimpiai kvalifikációs időszak, mely telis-tele volt magasságokkal és mélységekkel. Kálmán segítségével sikerült a mélységek során is észrevenni a tanulságokat, ezáltal egyre jobban kezeltem a stresszt és  kiegyensúlyozottabbá is váltam. Nem csak a magánéletemben,  hanem az eredményeimen is kezdett ez folyamatosan meglátszódni! Nagy szerepe volt abban, hogy egyáltalán sikerült kijutnom az Olimpiára, illetve hogy ott tisztességesen helyt álltam, előtte pedig világbajnoki ezüstérmet, világkupákat nyertem. Hálás vagyok, hogy a felkészítő gárdámat erősíti, remek csapatember, akiben az ember tiszta szívvel megbízhat."',
  },
  {
    id: 3,
    name: "Máramarosi Rita",
    title: "Tájfutó válogatott",
    image: "/images/maramarosi-rita.jpeg",
    achievements: [
      "3x Ifjúsági Európa bajnok (2021, 2022, 2023)",
      "3x Junior Világbajnok (2023); 2.h. középtáv, 3.h. hosszútáv, 3.h. váltó (2025)",
      "Világjátékok (Csengtu, Kína 2025): 6.h. középtáv, 6.h. sprint, 4.h. sprintváltó",
      "2x Felnőtt 6. helyezett váltó tag (2024)",
      "Sokszoros magyar bajnok tájfutó",
      "12x magyar bajnok középtávfutó",
    ],
    shortText:
      '"A zöldfülű álmodozó már felnőtt szárnyait bontogatja, de nem akárhogyan. Sok-sok akadályt leküzdve juthattam el a jelenlegi csúcsra, de ez idő alatt a személyiségem és a fizikumom is hatalmas lépésekben haladt felfelé. Megszűnni nem akaró, a már-már telhetetlenségre hajazó győzni akarást kellett az oldalunkra állítani..."',
    fullText:
      '"A zöldfülű álmodozó már felnőtt szárnyait bontogatja, de nem akárhogyan. Sok-sok akadályt leküzdve juthattam el a jelenlegi csúcsra, de ez idő alatt a személyiségem és a fizikumom is hatalmas lépésekben haladt felfelé. Megszűnni nem akaró, a már-már telhetetlenségre hajazó győzni akarást kellett az oldalunkra állítani. Az út meglehetősen kanyargós volt, de Doktor Úrral, aki 2021 nyara óta foglalkozik velem, sikeresen kiiktattuk azokat a bökdöső gátakat, amelyek leküzdése végül erősebbé tett. Mindenekelőtt a szorongás, a sérülés és a megfelelési kényszer drasztikus tüneteit kellett megcéloznunk, és most már a teljesítmény tökéletesítésére és a célok felé menetelésre fókuszálunk. A lélektani munka hatására lényegesen összeszedettebbnek érzem magam, a stresszhelyzeteket már tudom kezelni és egészséges önbizalommal várom a tétversenyeket, előre felkészülve azok minden rezdülésére. Elért eredményeim is igazolják, hogy jó úton haladunk. A mentális felkészülés felső határait sose lehet megsimogatni, úgy érzem, mindig van min csiszolnunk, hogy a NAGY napon a legélesebb lehessek."',
  },
  {
    id: 4,
    name: "J. Ivett",
    title: "Szervátültetett világbajnok teniszező",
    image: "/images/j-ivett.jpeg",
    achievements: [
      "Szervátültetettek Világjátéka (2023): egyéni 1.h., női páros 3.h., vegyes páros 2.h.; (2025): egyéni 2.h., női páros 2.h., vegyes páros 3.h."
    ],
    shortText:
      '"2022 óta dolgozunk együtt Kálmánnal. A megtartó, elfogadó terápiás tér nagyon sokat segített a sportolói és sporton kívüli életemben is, többek között hozzájárult ahhoz is, hogy 2023-ban az..."',
    fullText:
      '"2022 óta dolgozunk együtt Kálmánnal. A megtartó, elfogadó terápiás tér nagyon sokat segített a sportolói és sporton kívüli életemben is, többek között hozzájárult ahhoz is, hogy 2023-ban az Ausztráliában megrendezett Szervátültetettek Világjátékán sok-sok év után végre a dobogó tetejére állhattam. Kálmán a mentális felkészülésemben vállalt nagy szerepet."',
  },
  {
    id: 5,
    name: "Szabó Fanni",
    title: "3x3-as kosárlabda válogatott",
    image: "/images/szabo-fanni.jpeg",
    achievements: [
      "2x Magyar Bajnok (2011, 2013)",
      "3x Magyar Kupa Győztes (2011, 2012, 2013)",
      "Európa kupa 3. hely (2021)",
    ],
    shortText:
      '"Amióta Kálmánnal dolgozom, jelentős mértékben javult a teljesítményem. Az ő szakértői támogatásával megtanultam hogyan kezeljem a versenyhelyzetekben felmerülő stresszt, és hogyan maradjak összeszedett és fókuszált. Ami számomra különösen értékes,..."',
    fullText:
      '"Amióta Kálmánnal dolgozom, jelentős mértékben javult a teljesítményem. Az ő szakértői támogatásával megtanultam hogyan kezeljem a versenyhelyzetekben felmerülő stresszt, és hogyan maradjak összeszedett és fókuszált. Ami számomra különösen értékes, hogy Kálmán nem csupán a sportteljesítményemre összpontosít, hanem arra is, hogy jobban megértsem és elfogadjam önmagam, ezáltal holisztikusan, mind a sportban, mind a személyes életemben segít a fejlődésben."',
  },
  {
    id: 6,
    name: "Andrejszki Dóra",
    title: "Padel válogatott",
    image: "/images/andrejszki-dora.jpeg",
    achievements: [
      "8x magyar bajnok",
      "Európa Játékok résztvevő",
      "Év Padelezője Díj nyertese 2022, 2023, 2024",
      "Magyar ranglistavezető",
    ],
    shortText:
      '"Kezdetben azért szántam rá magam a pszichoterápiára, hogy kifejezetten a sportpályán való teljesítményemen tudjak javítani. Hamar szembesültem olyan dolgokkal, amik a pályán kívül történtek, illetve történnek velem és hatással vannak a játékomra. A terápia segít,..."',
    fullText:
      '"Kezdetben azért szántam rá magam a pszichoterápiára, hogy kifejezetten a sportpályán való teljesítményemen tudjak javítani. Hamar szembesültem olyan dolgokkal, amik a pályán kívül történtek, illetve történnek velem és hatással vannak a játékomra. A terápia segít, hogy ezeket a tényezőket a magánéletben vagy elengedjem, vagy jobban kezeljem és ezáltal a pályára se vigyem őket magammal. Rengeteget fejlődtem saját magam elfogadásában, hogy tudjam magamat szeretni és valós értékeim mentén kezelni. Annak a megértésében is fejlődtem, hogy egy meccset nem fogok hibátlanul lejátszani, viszont csak a következő pontra fókuszálva a hibáimmal együtt is tudok jól teljesíteni."',
  },
  {
    id: 7,
    name: "Péter Sára",
    title: "Felnőtt női válogatott tagja (szertorna)",
    image: "/images/peter-sara.jpeg",
    achievements: [
      "Európa Játékok ugrás bronzérmes",
      "Európa Bajnoki 7. (2019) és 8. (2024) helyezés (ugrás)",
      "2x Mesterfokú bajnok (2024 talaj, ugrás)",
    ],
    shortText:
      '"Pszichoterápiás kezelések segítségével már képes vagyok kezelni a verseny okozta stresszhelyzeteket, ami terápiás kapcsolatunkig rendszeresen okozott problémákat. Fontosak számomra ezek a ..."',
    fullText:
      '"Pszichoterápiás kezelések segítségével már képes vagyok kezelni a verseny okozta stresszhelyzeteket, ami terápiás kapcsolatunkig rendszeresen okozott problémákat. Fontosak számomra ezek a jellegű beszélgetések, egyéni pszichoterápiás foglalkozások, hiszen sokat kell dolgozni a célom eléréséhez vezető úton kialakuló fejben okozta nehézségeken."',
  },
  {
    id: 8,
    name: "Horányi Dóra",
    title: "Válogatott kenu versenyző",
    image: "/images/horanyi-dora.jpeg",
    achievements: [
      "Felnőtt Európa-bajnokság 2021, C1 5000 1. hely",
      "Világbajnokság U23 2021, C4 500 1. hely",
      "Európa-bajnokság U23 2025 C1 200 2. hely, C1 500 2. hely",
    ],
    shortText:
      '"2024 februárban kezdtem el együtt dolgozni Doktor Úrral, egy mentálisan megterhelő időszak alatt. A közös munka már az elején nagyon jól haladt, a májusi versenyeimen már nem is éreztem a korábbi problémáim hatásait..."',
    fullText:
      '"2024 februárban kezdtem el együtt dolgozni Doktor Úrral, egy mentálisan megterhelő időszak alatt. A közös munka már az elején nagyon jól haladt, a májusi versenyeimen már nem is éreztem a korábbi problémáim hatásait. Hatalmas segítség volt ez az együttműködés az idei szezonomban, rendkívül hálás vagyok ezért!"',
  },
  {
    id: 9,
    name: "Huller Dániel",
    title: "Válogatott atléta",
    image: "/images/huller-daniel.jpg",
    achievements: [
      "Ifjúsági Európa-bajnokság 2018, 400m gát 1. hely",
      "Ifjúsági Olimpia 2018, 400m gát 2. hely",
      "3x Felnőtt Magyar bajnok 2021, 2022, 2023; 400m és 800m síkfutás",
      "Felnőtt Európa-bajnokság 2022, 800m síkfutás 10. hely",
      "U20 2019 és U23 2023, Európa-bajnokság 6. hely",
      "U23 Országos csúcstartó 2022, 800m síkfutás 1:45.53",
    ],
    shortText:
      '"Élsportolóként számomra nemcsak a fizikai edzések, hanem a mentális munka is kiemelten fontos. Úgy gondolom, hogy a siker legalább annyira múlik a mentális felkészültségen, mint a pályán végzett fizikai munkán. A versenyek előtt..."',
    fullText:
      '"Élsportolóként számomra nemcsak a fizikai edzések, hanem a mentális munka is kiemelten fontos. Úgy gondolom, hogy a siker legalább annyira múlik a mentális felkészültségen, mint a pályán végzett fizikai munkán. A versenyek előtt rendszeresen alkalmazok vizualizációs technikákat, fejben újra és újra lefutom a távot, elképzelem a rajtot, a ritmust, és azt is, hogyan fogok reagálni, ha váratlan helyzet adódik. Kálmán ebben is sokat segített és segít. A 2024 nyarától vele végzett többlépcsős lélektani munka eredményeként a versenyhelyzetekhez köthető kezdeti intenzív szorongásom, aggodalmam fokozatosan oldódott. Önbizalmam, mentális stabilitásom újraépítésével egyre határozottabbá, magabiztosabbá váltam és 2 év „hullámvasút” után magamra találva újra szárnyalok. A folyamatos pszichoterápia kifejezetten segít abban, hogy önbizalmamat visszanyerjem és nyugodt maradjak, végig jól fókuszáljak illetve lehető legjobb formámat hozzam. A mentális felkészülést a napi rutinom részévé tettem. Meggyőződésem, hogy aki csak a testét edzi, de a mentalitásával nem foglalkozik, az nem tud hosszú távon sikeres lenni nemzetközi szinten. Hiszek abban, hogy a teljesítmény jelentős része fejben dől el. Szeretném, ha a fiatalabb sportolók is felismernék a mentális munka erejét. Edzőmmel és Kálmánnal együtt azon dolgozunk, hogy a testi és lelki egyensúly stabilizálásával folyamatosan tudjak magas szinten sportolni."',
  },
]

export default function ReferenciakPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const isExpanded = (id: number) => expandedItems.includes(id)

  // Function to get image dimensions based on testimonial ID
  const getImageDimensions = (id: number) => {
    switch (id) {
      case 1: // Muhari Eszter
        return { width: "331px", height: "299px" }
      case 2: // Guzi Blanka
        return { width: "362px", height: "307px" }
      case 4: // J. Ivett
        return { width: "338px", height: "276px" }
      case 5: // Szabó Fanni
        return { width: "292px", height: "332px" }
      case 6: // Andrejszki Dóra
        return { width: "400px", height: "310px" }
      case 7: // Péter Sára
        return { width: "314px", height: "313px" }
      case 9: // Huller Dániel
        return { width: "355px", height: "313px" }
      default: // Máramarosi Rita (id: 3) and Horányi Dóra (id: 8)
        return { width: "321px", height: "338px" }
    }
  }

  return (
  
    <div className="min-h-screen py-12 bg-peach" >
      <div className="container mx-auto px-4 pt-16 lg:pt-20">
        <div className="max-w-[1180px] mx-auto">
          {/* Header */}
          <AnimatedElement animation="fadeUp" delay={0}>
            <header className="text-center mb-12">
              <h1 className="text-2xl md:text-3xl font-medium text-dark-font">
                Sportolói referenciák az OSEI keretében végzett
                <br />
                szakmai tevékenységemről
              </h1>
            </header>
          </AnimatedElement>

          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => {
              const expanded = isExpanded(testimonial.id)
              const imageDimensions = getImageDimensions(testimonial.id)
              const isImageOnRight =
                testimonial.id === 2 || testimonial.id === 4 || testimonial.id === 6 || testimonial.id === 8

              return (
              <AnimatedElement key={testimonial.id} animation="fadeUp" delay={100 + index * 150}>
              
                <article
                  
                  className="bg-white rounded-[10px] shadow-[1px_1px_10px_rgba(0,0,0,0.1)] p-5"
                >
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8">
                    {/* Content Section - Always takes remaining space */}
                    <div className={`flex flex-col justify-start ${isImageOnRight ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <header className="mb-4">
                        <h2 className="text-2xl font-semibold text-dark-font">{testimonial.name}</h2>
                        <p className="text-lg text-dark-grey">{testimonial.title}</p>
                      </header>

                      {/* Achievements */}
                      {testimonial.achievements.length > 0 && (
                        <div className="mb-6">
                          <ul className="space-y-1 ml-2">
                            {testimonial.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-dark-font text-sm flex items-start">
                                <span className="w-1.5 h-1.5 bg-dark-blue rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Testimonial Text - This is the only expanding element */}
                      <blockquote className="text-dark-font leading-relaxed mb-4 flex-grow">
                        <p>{expanded ? testimonial.fullText : testimonial.shortText}</p>
                      </blockquote>

                      {/* Show More/Less Button */}
                      <button
                        onClick={() => toggleExpanded(testimonial.id)}
                        className="inline-flex items-center text-dark-blue hover:text-dark-font transition-colors duration-200 text-sm font-medium self-start"
                        aria-expanded={expanded}
                        aria-controls={`testimonial-${testimonial.id}`}
                      >
                        {expanded ? "Mutass kevesebbet" : "Mutass többet"}
                        {expanded ? (
                          <ChevronUp className="ml-1" size={16} />
                        ) : (
                          <ChevronDown className="ml-1" size={16} />
                        )}
                      </button>
                    </div>

                    {/* Image Section - Fixed container with stable dimensions */}
                    <div
                      className={`flex-shrink-0 ${isImageOnRight ? "lg:order-2 flex justify-end" : "lg:order-1 flex justify-start"} justify-center`}
                      style={{
                        maxWidth: imageDimensions.width,
                        //minWidth: imageDimensions.width,
                        //maxWidth: "100%",
                        width: "100%",
                      }}
                    >
                      <figure
                        className="relative "
                        style={{
                          //aspectRatio: `${parseInt(imageDimensions.width) / parseInt(imageDimensions.height)}`, 
                          //maxWidth: imageDimensions.width,
                          maxWidth: "100%",
                          height: imageDimensions.height,
                          width: imageDimensions.height,
                          //maxWidth: "100%",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} portré - Referenciák`}
                          className="rounded-[5px] shadow-md"
                          style={{
                            width: "100%",
                            //height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </div>
                </article>
              </AnimatedElement>
              )
            })}
          </div>
        </div>
        <div className="mt-12 mb-24">
        <p className="text-s text-dark-font text-center italic">
          A sportolókra vonatkozó valamennyi adat közzététele előzetes hozzájárulásukkal történt.
        </p>
      </div>
      </div>
    </div>
  
  )
}
