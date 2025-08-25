import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import PsychotherapyPurposeSection from "@/components/PsychotherapyPurposeSection"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import SpecialtiesSection from "@/components/SpecialtiesSection"
import { PageWrapper } from "@/components/ui/page-wrapper"

export default function HomePage() {
  return (
    <PageWrapper>
    <>
      <HeroSection />
      <AboutSection />
      <PsychotherapyPurposeSection />
      <ServicesSection />
      <SpecialtiesSection />
      <ContactSection />
    </>
    </PageWrapper>
  )
}
