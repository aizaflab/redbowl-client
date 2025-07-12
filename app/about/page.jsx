import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";
import AboutHero from "@/components/section/aboutSection/AboutHero";
import OurMission from "@/components/section/aboutSection/OurMission";
import Ourvalue from "@/components/section/aboutSection/Ourvalue";
import WhoWeAre from "@/components/section/aboutSection/WhoWeAre";
import WhyChooseUs from "@/components/section/aboutSection/WhyChooseUs";

export default function AboutUs() {
  return (
    <div>
      <SmoothScrollProvider>
        <AboutHero />
        <WhoWeAre />
        <WhyChooseUs />
        <OurMission />
        <Ourvalue />
      </SmoothScrollProvider>
    </div>
  );
}
