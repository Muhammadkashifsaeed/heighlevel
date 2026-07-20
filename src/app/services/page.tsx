import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import HireExpertHero from "../components/services/HireExpertHero";
import ServiceDetails from "../components/services/ServiceDetails";
import AutomationServiceDetails from "../components/services/AutomationServiceDetails";
import WhiteLabelServiceDetails from "../components/services/WhiteLabelServiceDetails";
import AIServiceDetails from "../components/services/AIServiceDetails";
import N8NServiceDetails from "../components/services/N8NServiceDetails";
import FunnelServiceDetails from "../components/services/FunnelServiceDetails";
import PaidMediaServiceDetails from "../components/services/PaidMediaServiceDetails";
import CreativeServiceDetails from "../components/services/CreativeServiceDetails";
import VideoServiceDetails from "../components/services/VideoServiceDetails";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <HireExpertHero />
      <ServiceDetails />
      <AutomationServiceDetails />
      <WhiteLabelServiceDetails />
      <AIServiceDetails />
      <N8NServiceDetails />
      <FunnelServiceDetails />
      <PaidMediaServiceDetails />
      <CreativeServiceDetails />
      <VideoServiceDetails />
      <Footer />
    </main>
  );
}
