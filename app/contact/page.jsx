import ContactHero from "@/components/section/contactSection/ContactHero";
import ContactCard from "@/components/section/contactSection/ContactCard";
import ContactFormMap from "@/components/section/contactSection/ContactFormMap";
import SmoothScrollProvider from "@/components/scroll/SmoothScrollProvider";

export default function ContactPage() {
  return (
    <div>
      <SmoothScrollProvider>
        <ContactHero />
        <ContactCard />
        <ContactFormMap />
      </SmoothScrollProvider>
    </div>
  );
}
