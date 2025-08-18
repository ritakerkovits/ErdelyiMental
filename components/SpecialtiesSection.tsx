import Link from "next/link"
import { ArrowRight } from "lucide-react"

const SpecialtiesSection = () => {
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
    <section className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Title Section - Left Side - Vertically Centered */}
            <div className="lg:pr-8 flex items-center justify-center lg:justify-start text-center lg:text-left">
              <h2 className="text-[22px] md:text-3xl font-medium text-dark-font leading-tight">
                Ismerje meg
                <br />
                kiemelt szakterületeimet
              </h2>
            </div>

            {/* Cards Section - Right Side */}
            <div className="space-y-4">
              {specialties.map((specialty, index) => (
                <Link
                  key={index}
                  href={specialty.link}
                  className="block bg-dark-blue text-light-font p-6 rounded-md hover:bg-dark-blue/90 transition-colors duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-light-font text-md md:text-lg font-medium leading-relaxed pr-4">{specialty.title}</span>
                    <ArrowRight
                      className="text-light-font flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
                      size={32}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialtiesSection
