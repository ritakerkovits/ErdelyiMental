import type { Metadata } from "next"
import { GraduationCap, Users, Globe } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  //metadataBase: new URL("https://www.erdelyimental.hu"),
  title: "Bemutatkozás - Dr. Erdélyi Kálmán",
  description:
    "Ismerje meg szakmai tapasztalataimat, végzettségeimet és terápiás megközelítésemet.",
  alternates: {
    canonical: "/bemutatkozas",
  },
  openGraph: {
    title: "Bemutatkozás – Dr. Erdélyi Kálmán",
    description:
      "Ismerje meg szakmai tapasztalataimat, végzettségeimet és terápiás megközelítésemet.",
    //url: "https://www.erdelyimental.hu/bemutatkozas",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function BemutatkozasPage() {
  const experienceData = [
    { period: "1994 - 1995", institution: "Országos Pszichiátriai és Neurológiai Intézet" },
    { period: "1996 - 1997", institution: "Massillon Psychiatric Center, Ohio, USA" },
    { period: "1997 - 2000", institution: "Petz Aladár Megyei Kórház III. sz. Pszichiátriai oszt., Győr" },
    {
      period: "2000 - 2009",
      institution:
        "OPNI (OORI),Tündérhegyi Pszichoszomatikus és Pszichoterápiás Rehabilitációs Osztály 2005-től részlegvezető helyettes. 2007-től adjunktus",
    },
    {
      period: "2009 - 2010",
      institution:
        "Egyesített Szent István és Szent László Kórház- Rendelőintézet Merényi Gusztáv Kórház, Pszichiátriai és Addiktológiai Rehabilitációs Osztály. Részlegvezető.",
    },
    {
      period: "2010 - 2020",
      institution: "Újpesti Egészségügyi Nonprofit Kft Mentálhygiénés Gondozóintézet. Gondozóvezető főorvos",
    },
    {
      period: "2020 - ",
      institution:
        "Országos Sportegészségügyi Intézet (OSEI) Klinikai Szakpszichológiai és Pszichiátriai Szakrendelés. Vezető főorvos",
    },
    {
      period: "2001 -",
      institution: "Szakambuláns ellátás valamint pszichiátriai-pszichoterápiás magánorvosi tevékenység",
    },
  ]

  const qualifications = [
    "1993: Semmelweis Egyetem ÁOK",
    "1998: pszichiátria szakvizsga",
    "2003: pszichoterápia szakvizsga",
    "2005: pszichiátriai orvosi rehabilitáció szakvizsga",
  ]

  const memberships = [
    "Magyar Pszichiátriai Társaság",
    "Dinamikus Rövidterápiás Egyesület és Alkotó Műhely /DREAM/",
    "Magyar Pszichiátriai Társaság - Sportlélektani Szekció",
  ]

  const languages = ["Magyar", "Angol"]

  return (
    <PageWrapper>
    <div className="min-h-screen py-8 bg-peach pb-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* First Block - Introduction */}
        <AnimatedElement animation="fadeUp" delay={0}>
          <div className="bg-white rounded-lg shadow-sm p-4 lg:p-8 mb-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <AnimatedElement
                      animation="slideRight"
                      delay={200}
                      className="lg:col-span-1 order-2 lg:order-1 flex justify-center lg:justify-start"
              >              
                <figure className="text-center my-3 lg:w-[320px] lg:min-w-[320px] -ml-6">
                  <img
                    src="/images/bemutatkozas-portrait.png"
                    alt="Dr. Erdélyi Kálmán bemutatkozás portré - pszichiáter és pszichoterapeuta professzionális képe"
                    className="w-full lg:max-w-sm -mb-8"
                    style={{
                      width: "320px",
                      height: "auto",
                      maxWidth: "100%",
                    }}
                    loading="lazy"
                  />
                  <figcaption className="text-center">
                    <h3 className="text-xl font-semibold text-dark-blue">Dr. Erdélyi Kálmán</h3>
                    <p className= "text-dark-grey text-sm">Pszichiáter</p>
                    <p className="text-dark-grey text-sm">Pszichoterapeuta</p>
                    <p className=" text-dark-grey text-sm">Pszichiátriai rehabilitációs szakorvos</p>
                  </figcaption>
                </figure>
              </AnimatedElement>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <AnimatedElement animation="fadeUp" delay={100}>
                <h1 className="text-2xl md:text-title-3xl font-semibold text-dark-blue mb-3">Bemutatkozás</h1>
                </AnimatedElement>
                <div className="space-y-3 text-dark-font leading-relaxed">
                  <AnimatedElement animation="fadeUp" delay={200}>
                  <p>
                    1993-ban végeztem a Semmelweis Egyetem Általános Orvostudományi Karán. Kezdettől fogva pszichiátriai
                    és pszichoterápiás területen dolgozom. 2020 óta vezetem az Országos Sportegészségügyi Intézet
                    (Sportkórház) Sportmentálhigiénés (Sportpszichiátriai-Sportpszichológiai) Centrumát. 2001 óta
                    folytatok magánrendelést. Szakképesítéseim: pszichiátria (1999), pszichoterápia (2003), pszichiátriai
                    orvosi rehabilitáció (2005).
                  </p>
                  </AnimatedElement>
                  <AnimatedElement animation="fadeUp" delay={300}>
                  <p>
                    Sokéves szakmai tapasztalattal rendelkezem az életvezetési nehézségek, (pár)kapcsolati konfliktusok,
                    szorongás, depresszió, pánikzavar, stresszkezelési nehézségek, önértékelési zavarok terén. A tünetek
                    hátterében megbúvó lélektani történések feltárásában és átdolgozásában felajánlom szakmai
                    segítségemet. Önismereti célból is fordulhatnak hozzám. Volt élsportolóként a sportolói lét, közeg nem
                    idegen számomra, így át tudom élni és érezni a megélt csodákat ugyanúgy, mint a kísérő nehézségeket,
                    bizonytalanságokat, elakadást, sebezhetőséget. A valójában elérhető teljesítmény lelki egyensúly
                    nélkül nem valósítható meg, így a sportolói teljesítmény alapja a mentális jóllét. A lelki egyensúly
                    elérése és a megteremtett harmónia fenntartása megkerülhetetlen. Igény esetén ebben tudok segítséget
                    nyújtani sportolóknak / élsportolóknak is.
                  </p>
                  </AnimatedElement>
                  <AnimatedElement animation="fadeUp" delay={400}>
                  <p>
                    Terápiás módszereim: feltáró valamint probléma fókuszú egyéni pszichoterápia, álomközpontú rövid
                    dinamikus terápia, önismeret, mentális tréning, relaxáció, autogén tréning. Igény esetén terápiás
                    kiscsoport foglalkozás (verbális szabad interakciós kiscsoport), melynek célja az önreflexiós készség
                    növelése, az elakadások feltárása, az erőforrások erősítése, a személyközi kapcsolatok minőségének
                    javítása, ezzel a (csapat)kohézió megteremtése, megerősítése.
                  </p>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Second Block - Professional Experience Table */}
        <AnimatedElement animation="fadeUp" delay={500}>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-dark-blue mb-6">Szakmai Tapasztalat</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-light-blue text-dark-font">
                  <th className="px-4 py-3 text-left font-semibold border-b border-b-[#B8CEDB]">Időszak</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-b-[#B8CEDB]">Intézmény</th>
                </tr>
              </thead>
              <tbody>
                {experienceData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-light-blue"}>
                    <td className="px-4 py-3 text-dark-font font-medium whitespace-nowrap border-b border-b-[#B8CEDB]">{item.period}</td>
                    <td className="px-4 py-3 text-dark-font border-b border-b-[#B8CEDB]">{item.institution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </AnimatedElement>

        {/* Last Three Blocks - Side by Side */}
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          
          {/* Qualifications Block */}
          <AnimatedElement
                  animation="slideUp"
                  delay={600}
                  className="bg-white rounded-lg shadow-sm p-6 md:col-span-2"
                  as="article"
                  aria-labelledby="qualifications-heading"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-dark-blue mr-3" size={24} />
              <h3 className="text-lg font-semibold text-dark-blue">Végzettségek</h3>
            </div>
            <ul className="space-y-2">
              {qualifications.map((qualification, index) => (
                <li key={index} className="text-dark-font text-sm flex items-start">
                  {qualification}
                </li>
              ))}
            </ul>
          </AnimatedElement>

          {/* Scientific Society Membership Block */}
          
          <AnimatedElement
                  animation="slideUp"
                  delay={750}
                  className="bg-white rounded-lg shadow-sm p-6 md:col-span-2"
                  as="article"
                  aria-labelledby="memberships-heading"
          >
            <div className="flex items-center mb-4">
              <Users className="text-dark-blue mr-3" size={24} />
              <h3 className="text-lg font-semibold text-dark-blue">Tudományos társasági tagság</h3>
            </div>
            <ul className="space-y-2">
              {memberships.map((membership, index) => (
                <li key={index} className="text-dark-font text-sm flex items-start">
                  {membership}
                </li>
              ))}
            </ul>
          </AnimatedElement>

          {/* Language of Care Block */}
        
          <AnimatedElement
                  animation="slideUp"
                  delay={900}
                  className="bg-white rounded-lg shadow-sm p-6 md:col-span-1"
                  as="article"
                  aria-labelledby="languages-heading"
          >
            <div className="flex items-center mb-4">
              <Globe className="text-dark-blue mr-3" size={24} />
              <h3 className="text-lg font-semibold text-dark-blue">Ellátás nyelve</h3>
            </div>
            <ul className="space-y-2">
              {languages.map((language, index) => (
                <li key={index} className="text-dark-font text-sm flex items-start">
                  <span className="w-2 h-2 bg-dark-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {language}
                </li>
              ))}
            </ul>
          </AnimatedElement>
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}
