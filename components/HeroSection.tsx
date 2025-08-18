import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-peach" >
      <div className="container mx-auto px-4">
        {/* Constrained max-width to match other sections */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side Content */}
            <div className="space-y-8">
              {/* Title and Subtitle */}
              <div>
                <h1 className="text-[22px] md:text-4xl text-dark-font font-medium leading-tight mb-1 lg:w-full lg:max-w-[900px]">Pszichoterápiás magánrendelés</h1>
                <h2 className="text-xl md:text-3xl text-dark-font font-medium leading-tight w-full max-w-[800px]">
                  Mentális segítségnyújtás sportolók és élsportolók számára
                </h2>
              </div>

              {/* Quote Section */}
              <div className="flex flex-col justify-between max-w-sm">
                <div className="text-left">
                  <blockquote className="italic text-dark-font text-sm lg:text-base leading-relaxed">
                    <p>"Nem az, amit átélsz, hanem ahogy fogadod,</p>
                    <p className="ml-2 mb-2">az formálja majd sorsodat ..."</p>
                  </blockquote>
                </div>
                <div className="text-right mb-6">
                  <cite className="text-sm lg:text-base italic">/Blaise Pascal <span className="text-xs lg:text-[14px]">1623-1662/</span></cite>
                </div>
              </div>

              {/* Staircase Steps Image */}
              <div className="py-1 lg:-ml-16">
                <img
                  src="/images/step3.png"
                  alt="Terápiás lépések: Ismerd meg Önmagad, Fogadd el Önmagad, Barátkozz meg Önmagaddal, Légy fontos Önmagadnak, Nyújts biztonságot Önmagadnak, Vezesd Önmagad"
                  className="w-full max-w-lg mx-auto"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col lg:flex-row gap-4">
                <Link
                  href="/kapcsolat"
                  className="bg-dark-blue text-white px-8 py-3 font-semibold hover:bg-dark-blue/90 transition-colors duration-200 text-center rounded"
                >
                  Kapcsolat felvétel
                </Link>
                <Link
                  href="/terapias-modszereim"
                  className="bg-white text-dark-blue border-2 border-dark-blue px-8 py-3 font-semibold hover:bg-dark-blue/5 transition-colors duration-200 text-center rounded"
                >
                  Terápiás módszereim
                </Link>
              </div>
            </div>

            {/* Right Side - Vertical Profile Image */}
            <div className="flex flex-col items-center lg:items-end">
              <figure className="relative">
                <img
                  src="\images\dr-erdelyi-kalman-portrait.png"
                  alt="Dr. Erdélyi Kálmán professzionális portréja - pszichiáter és pszichoterapeuta"
                  className="object-cover"
                  style={{
                    width: "363px",
                    height: "auto",
                    maxWidth: "100%",
                  }}
                  loading="lazy"
                />
              </figure>

              {/* Image Caption - Directly below the image */}
              <div className="text-center lg:mr-16">
                <h3 className="text-xl font-bold text-dark-font mb-1">Dr. Erdélyi Kálmán</h3>
                <div className="text-dark-font space-y-1 font-medium">
                  <p className="text-sm">Pszichiáter</p>
                  <p className="text-sm">Pszichoterapeuta</p>
                  <p className="text-sm">Pszichiátriai rehabilitációs szakorvos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
