import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

const PsychotherapyPurposeSection = () => {
  return (
    <section className="py-16 bg-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2">
            <AnimatedElement animation="fadeUp" delay={0}>
            <h2 className="text-2xl font-medium text-light-font mb-2">Mire szolgál a pszichoterápia</h2>
            </AnimatedElement>
            <div className="text-light-font leading-relaxed max-w-[900px] w-full">
              <AnimatedElement animation="fadeUp" delay={100}>
              <p className="mb-2">
                Amikor aktuális lelki gondjai, tünetei megnehezítik az életvezetését és úgy érzi, hogy szüksége volna
                segítségre, akkor érdemes pszichoterapeutához fordulnia. A szakember nem hétköznapi módon foglalkozik az
                Ön problémáival, hanem azt a módszert választja, amivel az leginkább és leghamarabb megoldható.
              </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={200}>
              <p>
                A lelki problémák nyomásában tehetetlennek érzi magát. Jelen állapotát, de a jövőjét is kilátástalannak
                érezheti. Ugye ismerősek ezek a gondolatok: „Nem ismerek önmagamra ... Mintha nem én lennék ... Nem tudom mi
                lesz velem ... Tehetetlen vagyok ... Kihez forduljak? Ki segíthetne rajtam?"
              </p>
              </AnimatedElement>
            </div>

            {/* CTA Button */}
            <AnimatedElement animation="fadeUp" delay={300}>
            <div className="pt-6">
              <Link
                href="/mire-szolgal-a-pszichoterapia"
                className="group inline-flex items-center text-light-font hover:text-light-peach transition-colors duration-200 font-medium text-base underline decoration-2 underline-offset-4"
              >
                Olvasson tovább
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PsychotherapyPurposeSection
