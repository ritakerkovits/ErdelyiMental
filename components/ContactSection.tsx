import { Phone, MapPin, Calendar } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

const ContactSection = () => {
  return (
    <section className="py-16 bg-white pb-[140px]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <AnimatedElement animation="fadeUp" delay={0}>
            <h2 className="text-3xl font-medium text-dark-font mb-6">Kapcsolat</h2>
            </AnimatedElement>
            <div className="max-w-2xl mx-auto space-y-2">
              <AnimatedElement animation="fadeUp" delay={100}>
                <p className="text-dark-font font-regular text-lg">
                  A jelentkezőket csendes, nyugodt környezetben várom. Magánrendelésem Budapest 2. kerületében Pasaréten
                  működik.
                </p>
              </AnimatedElement>
              <AnimatedElement animation="fadeUp" delay={200}>
              <p className="text-dark-font font-medium text-lg">Bejelentkezéshez kérem hívja az itt megadott telefonszámot.</p>
              </AnimatedElement>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Left Side - Info Cards (2/5 of width) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone Card */}
              <AnimatedElement animation="slideRight" delay={300}>
              <div className="bg-light-blue p-6 rounded-md shadow-md">
                <div className="flex items-center mb-4">
                  <Phone className="text-dark-font mr-3 flex-shrink-0" size={18} />
                  <h3 className="text-sm font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                    +36 30 400 6490
                  </h3>
                </div>
                <p className="text-dark-font leading-relaxed">
                  Időpontot egyeztethet hétköznapokon
                  <br />
                  8:00 - 10:00 valamint 20:00 - 22:00 között
                </p>
              </div>
              </AnimatedElement>

              {/* Address Card */}
              <AnimatedElement animation="slideRight" delay={450}>
              <div className="bg-light-blue p-6 rounded-md shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-dark-font mr-3 flex-shrink-0" size={18} />
                  <h3 className="text-sm font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                    1026 Budapest, Gyergyó u. 8 Fsz. 3
                  </h3>
                </div>
                <p className="text-dark-font leading-relaxed">
                  Személygépkocsival és tömegközlekedési eszközzel
                  <br />
                  egyaránt könnyen elérhető.
                </p>
              </div>
              </AnimatedElement>

              {/* Office Hours Card */}
              <AnimatedElement animation="slideRight" delay={600}>
              <div className="bg-light-blue p-6 rounded-md shadow-md">
                <div className="flex items-center mb-4">
                  <Calendar className="text-dark-font mr-3 flex-shrink-0" size={18} />
                  <h3 className="text-sm font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                    Rendelési idő
                  </h3>
                </div>
                <div className="space-y-2 text-dark-font leading-relaxed">
                  <p>Hétfő: 17:00 - 20:00</p>
                  <p>Szerda: 08:00 - 11:00</p>
                  <p>Csütörtök: 16:00 - 20:00</p>
                </div>
              </div>
              </AnimatedElement>
            </div>

            {/* Right Side - Map (3/5 of width) - Height matches cards exactly */}
            <AnimatedElement animation="slideLeft" delay={400} className="lg:col-span-3">
              <div className="h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden shadow-sm">
            
                <a
                  href="https://maps.google.com/maps?q=1026+Budapest,+Gyergyó+u.+8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  aria-label="Nyissa meg a térképet a Google Maps-ben"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.904983788156!2d19.0214863!3d47.5172889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9a8b7a8c4c9%3A0x8e8e6d6a8d8b8d8a!2zR3llcmd5w7MgdS4gOCwgQnVkYXBlc3QsIDEwMjY!5e0!3m2!1shu!2shu!4v1625123456789!5m2!1shu!2shu"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "100%", height: "100%" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Erdélyi Kálmán rendelőjének helye a térképen"

                  ></iframe>
                </a>
              </div>
            
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
