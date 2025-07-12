import HomeBlog from "@/components/section/homeSection/HomeBlog";
import HomeFood from "@/components/section/homeSection/HomeFood";
import HeroSection from "@/components/section/homeSection/HeroSection";
import AboutSection from "@/components/section/homeSection/AboutSection";
import SpecialOffer from "@/components/section/homeSection/SpecialOffer";
import SignatureDish from "@/components/section/homeSection/SignatureDish";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

export default function Home() {
  return (
    <div>
      <SmoothScrollProvider>
        <HeroSection />
        <SignatureDish />
        <AboutSection />
        <HomeFood />
        <HomeBlog />
        <SpecialOffer />
      </SmoothScrollProvider>
    </div>
  );
}
