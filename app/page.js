import AboutSection from "@/components/section/homeSection/AboutSection";
import HeroSection from "@/components/section/homeSection/HeroSection";
import SignatureDish from "@/components/section/homeSection/SignatureDish";
import SpecialOffer from "@/components/section/homeSection/SpecialOffer";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <SignatureDish />
      <AboutSection />
      <SpecialOffer />
    </div>
  );
}
