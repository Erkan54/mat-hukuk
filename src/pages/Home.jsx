import HeroSection from '../components/home/HeroSection';
import TrustBand from '../components/home/TrustBand';
import AboutPreview from '../components/home/AboutPreview';
import PracticeAreasPreview from '../components/home/PracticeAreasPreview';
import TeamPreview from '../components/home/TeamPreview';
import AppointmentPreview from '../components/home/AppointmentPreview';
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
      <ContactCTA />
    </main>
  );
}
