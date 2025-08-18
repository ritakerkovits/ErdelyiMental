import type { Metadata } from "next"
import { GraduationCap, Users, Globe } from "lucide-react"

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
    <div className="min-h-screen py-8 bg-peach pb-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* First Block - Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-4 lg:p-8 mb-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <figure className="text-center my-3 w-[320px] min-w-[320px] -ml-6">
                <img
                  src="/images/bemutatkozas-portrait.png"
                  alt="Dr. Erdélyi Kálmán bemutatkozás portré - pszichiáter és pszichoterapeuta professzionális képe"
                  className="w-full max-w-sm -mb-8"
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
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <h1 className="text-2xl md:text-title-3xl font-semibold text-dark-blue mb-3">Bemutatkozás</h1>
              <div className="space-y-3 text-dark-font leading-relaxed">
                <p>
                  1993-ban végeztem a Semmelweis Egyetem Általános Orvostudományi Karán. Kezdettől fogva pszichiátriai
                  és pszichoterápiás területen dolgozom. 2020 óta vezetem az Országos Sportegészségügyi Intézet
                  (Sportkórház) Sportmentálhigiénés (Sportpszichiátriai-Sportpszichológiai) Centrumát. 2001 óta
                  folytatok magánrendelést. Szakképesítéseim: pszichiátria (1999), pszichoterápia (2003), pszichiátriai
                  orvosi rehabilitáció (2005).
                </p>
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
                <p>
                  Terápiás módszereim: feltáró valamint probléma fókuszú egyéni pszichoterápia, álomközpontú rövid
                  dinamikus terápia, önismeret, mentális tréning, relaxáció, autogén tréning. Igény esetén terápiás
                  kiscsoport foglalkozás (verbális szabad interakciós kiscsoport), melynek célja az önreflexiós készség
                  növelése, az elakadások feltárása, az erőforrások erősítése, a személyközi kapcsolatok minőségének
                  javítása, ezzel a (csapat)kohézió megteremtése, megerősítése.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block - Professional Experience Table */}
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

        {/* Last Three Blocks - Side by Side */}
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Qualifications Block */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
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
          </div>

          {/* Scientific Society Membership Block */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-2">
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
          </div>

          {/* Language of Care Block */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:col-span-1">
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
          </div>
        </div>
      </div>
    </div>
  )
}
