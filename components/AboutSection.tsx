import Link from "next/link"
import { ArrowRight } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-8" style={{ backgroundColor: "#F5F8FA" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 items-center">
            {/* Left Side - Content (4 columns) */}
            <div className="lg:col-span-3 space-y-2 w-full">
              <h2 className="text-2xl font-medium text-dark-font mb-2">Bemutatkozás</h2>

              <div className="space-y-4 text-dark-font leading-relaxed">
                <p>
                  Sokéves szakmai tapasztalattal rendelkezem az életvezetési nehézségek, (pár)kapcsolati konfliktusok,
                  szorongás, depresszió, pánikzavar, stresszkezelési nehézségek, önértékelési zavarok terén. A tünetek
                  hátterében megbúvó lélektani történések feltárásában és átdolgozásában valamint önismereti igény
                  esetén felajánlom szakmai segítségemet.
                </p>

                <p>
                  A valójában elérhető teljesítmény lelki egyensúly nélkül nem valósítható meg, így a sportolói
                  teljesítmény alapja is a mentális jóllét. A lelki egyensúly elérése és a megteremtett harmónia
                  fenntartása megkerülhetetlen. Sportolók, élsportolók is fordulhatnak hozzám mentális felkészítés és
                  segítségnyújtás céljából.
                </p>

                <p>Magánrendelésemen csendes, nyugodt környezetben várom.</p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/bemutatkozas"
                  className="group inline-flex items-center bg-dark-blue text-white px-6 py-3 rounded font-medium hover:bg-dark-blue/90 transition-colors duration-200"
                >
                  Olvasson tovább
                  <ArrowRight 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    size={18} />
                </Link>
              </div>
            </div>

            {/* Right Side - Image (1 column) */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <figure className="lg:w-[300px] lg:min-w-[300px]">
                <img
                  src="\images\bemutatkozas-gondolkodo.png"
                  alt="Bemutatkozás portré - Gondolkodó szobor, az önreflexió és belső béke szimbóluma a pszichoterápiában"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
