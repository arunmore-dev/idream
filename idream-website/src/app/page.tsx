import Hero from "@/components/Hero/Hero";
import Pioneering from "@/components/Pioneering/Pioneering";
import OurJourney from "@/components/OurJourney/OurJourney";
import BusinessSegments from "@/components/BusinessSegments/BusinessSegments";
import StrategicInterventions from "@/components/StrategicInterventions/StrategicInterventions";
import Statistics from "@/components/Statistics/Statistics";
import StrategicRealignment from "@/components/StrategicRealignment/StrategicRealignment";
import InvestorRelations from "@/components/InvestorRelations/InvestorRelations";
import CTABanner from "@/components/CTABanner/CTABanner";
// import Careers from "@/components/Careers/Careers";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Pioneering />
      <OurJourney />
      <BusinessSegments />
      <StrategicInterventions />
      <Statistics />
      <StrategicRealignment />
      <InvestorRelations />
      <CTABanner />
      {/* <Careers /> */}
      <Contact />
    </>
  );
}