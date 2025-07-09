import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import AboutSection from "@/components/section/homeSection/AboutSection";
import HeroSection from "@/components/section/homeSection/HeroSection";
import HomeBlog from "@/components/section/homeSection/HomeBlog";
import SignatureDish from "@/components/section/homeSection/SignatureDish";
import SpecialOffer from "@/components/section/homeSection/SpecialOffer";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <SmoothScrollProvider>
        <HeroSection />
        <SignatureDish />
        <AboutSection />
        <HomeBlog />
        <SpecialOffer />
      </SmoothScrollProvider>
    </div>
  );
}
