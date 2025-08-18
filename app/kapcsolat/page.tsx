import type { Metadata } from "next"
import { Phone, MapPin, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Kapcsolat - Dr. Erdélyi Kálmán",
  description:
    "Vegye fel velem a kapcsolatot! A rendelési időimről és elérhetőségeimről az oldalon tájékozódhat.",
  alternates: {
    canonical: "/kapcsolat",
  },
  openGraph: {
    title: "Kapcsolat – Dr. Erdélyi Kálmán",
    description:
      "Vegye fel velem a kapcsolatot! A rendelési időimről és elérhetőségeimről az oldalon tájékozódhat.",
    //url: "https://www.erdelyimental.hu/kapcsolat",
    siteName: "Dr. Erdélyi Kálmán",
    locale: "hu_HU",
  },
}

export default function KapcsolatPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EDF0F3" }}>
      <div className="py-12 pb-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-3xl font-semibold text-dark-font mb-6">Kapcsolat</h1>
              <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-dark-font text-lg">
                  A jelentkezőket csendes, nyugodt környezetben várom. Magánrendelésem Budapest 2. kerületében Pasaréten
                  működik.
                </p>
                <p className="text-dark-font text-lg font-medium">Bejelentkezéshez kérem hívja az itt megadott telefonszámot.</p>
              </div>
            </div>

            {/* Main Content Layout */}
            <div className="grid lg:grid-cols-5 gap-8 items-stretch">
              {/* Left Side - Info Cards (1/3 of width = 2 columns out of 5) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Phone Card */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Phone className="text-dark-font mr-3 flex-shrink-0" size={18} />
                    <h2 className="text-xl font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                      +36 30 400 6490
                    </h2>
                  </div>
                  <p className="text-dark-font leading-relaxed">
                    Időpontot egyeztethet hétköznapokon
                    <br />
                    8:00 - 10:00 valamint 20:00 - 22:00 között
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <div className="flex items-center mb-4">
                    <MapPin className="text-dark-font mr-3 flex-shrink-0" size={18} />
                    <h2 className="text-xl font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                      1026 Budapest, Gyergyó u. 8 Fsz. 3
                    </h2>
                  </div>
                  <p className="text-dark-font leading-relaxed">
                    Személygépkocsival és tömegközlekedési eszközzel
                    <br />
                    egyaránt könnyen elérhető.
                  </p>
                </div>

                {/* Office Hours Card */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-dark-font mr-3 flex-shrink-0" size={18} />
                    <h2 className="text-xl font-semibold" style={{ fontSize: "20px", color: "#4B5563" }}>
                      Rendelési idő
                    </h2>
                  </div>
                  <div className="space-y-2 text-dark-font leading-relaxed">
                    <p>Hétfő: 17:00 - 20:00</p>
                    <p>Szerda: 08:00 - 11:00</p>
                    <p>Csütörtök: 16:00 - 20:00</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Map (2/3 of width = 3 columns out of 5) */}
              <div className="lg:col-span-3">
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
                      style={{ border: 0, height: "100%" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dr. Erdélyi Kálmán rendelőjének helye a térképen"
                    ></iframe>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
