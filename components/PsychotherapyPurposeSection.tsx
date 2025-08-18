import Link from "next/link"
import { ArrowRight } from "lucide-react"

const PsychotherapyPurposeSection = () => {
  return (
    <section className="py-16 bg-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-light-font mb-2">Mire szolgál a pszichoterápia</h2>

            <div className="text-light-font leading-relaxed max-w-[900px] w-full">
              <p className="mb-2">
                Amikor aktuális lelki gondjai, tünetei megnehezítik az életvezetését és úgy érzi, hogy szüksége volna
                segítségre, akkor érdemes pszichoterapeutához fordulnia. A szakember nem hétköznapi módon foglalkozik az
                Ön problémáival, hanem azt a módszert választja, amivel az leginkább és leghamarabb megoldható.
              </p>

              <p>
                A lelki problémák nyomásában tehetetlennek érzi magát. Jelen állapotát, de a jövőjét is kilátástalannak
                érezheti. Ugye ismerősek ezek a gondolatok: „Nem ismerek önmagamra...Mintha nem én lennék...Nem tudom mi
                lesz velem...Tehetetlen vagyok...Kihez forduljak? Ki segíthetne rajtam?"
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/mire-szolgal-a-pszichoterapia"
                className="group inline-flex items-center text-light-font hover:text-light-peach transition-colors duration-200 font-medium text-base underline decoration-2 underline-offset-4"
              >
                Olvasson tovább
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PsychotherapyPurposeSection
