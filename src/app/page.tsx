import HeroSection from "./components/HeroSection";
import PainPoints from "./components/PainPoints";
import PainGrid from "./components/PainGrid";
import HowWeWork from "./components/HowWeWork";
import SocialProof from "./components/SocialProof";
import FAQSection from "./components/FAQSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-full font-sans">
      <HeroSection />
      <PainPoints />
      <PainGrid />
      <WhyChooseUs />
      <Services />
      <HowWeWork />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
}
