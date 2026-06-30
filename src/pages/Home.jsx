import HeroSection from '../components/home/HeroSection';
import TrustBand from '../components/home/TrustBand';
import AboutPreview from '../components/home/AboutPreview';
import PracticeAreasPreview from '../components/home/PracticeAreasPreview';
import TeamPreview from '../components/home/TeamPreview';
import AppointmentPreview from '../components/home/AppointmentPreview';
import PublicationsPreview from '../components/home/PublicationsPreview';
import FAQPreview from '../components/home/FAQPreview';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBand />
      <AboutPreview />
      <PracticeAreasPreview />
      <TeamPreview />
      <AppointmentPreview />
      <PublicationsPreview />
      <FAQPreview />
      <ContactCTA />
    </main>
  );
}
