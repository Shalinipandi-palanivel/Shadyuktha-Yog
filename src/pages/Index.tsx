import HeroSection from "@/components/HeroSection";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import ProgramsSection from "@/components/ProgramsSection";
import OnlineHighlight from "@/components/OnlineHighlight";
import SadhanaLevelsSection from "@/components/SadhanaLevelsSection";
import SessionTypesSection from "@/components/SessionTypesSection";
import TeachingMethodsSection from "@/components/TeachingMethodsSection";
import MeetTeachersSection from "@/components/MeetTeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/pages/ContactSection";
import ProgramsCardSection from "@/components/ProgramsCardSection";

const Index = () => {
  return (
    <main className="max-w-[100vw] overflow-x-hidden">
      <HeroSection />
      {/* <PartnerLogosSection /> */}
      <ProgramsSection />
      {/* <ProgramsCardSection /> */}
      <SadhanaLevelsSection />
      {/* <SessionTypesSection /> */}
      <OnlineHighlight />
      <WhatSetsUsApart />
      <TeachingMethodsSection />
      <MeetTeachersSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <ContactSection /> */}
    </main>
  );
};

export default Index;
