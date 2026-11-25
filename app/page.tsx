import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { GrievanceSection } from "@/components/home/GrievanceSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { EmpowermentSection } from "@/components/home/EmpowermentSection";
import { GlobalServices } from "@/components/home/GlobalServices";
import { BusinessNetwork } from "@/components/home/BusinessNetwork";
import { FounderSection } from "@/components/home/FounderSection";
import { Testimonials } from "@/components/home/Testimonials";
import { KnowledgeCentre } from "@/components/home/KnowledgeCentre";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#202821]">
      {/* Section 1: Header and navigation */}
      <Header />

      <main className="flex-1">
        {/* Section 2: Hero — most important section */}
        <Hero />

        {/* Section 3: Mission introduction */}
        <Mission />

        {/* Section 4: SREE Grievance System */}
        <GrievanceSection />

        {/* Section 5: Services */}
        <ServicesSection />

        {/* Section 6: Stories of people we have helped */}
        <SuccessStories />

        {/* Section 7: Empowerment */}
        <EmpowermentSection />

        {/* Section 8: Global services */}
        <GlobalServices />

        {/* Section 9: Our business network */}
        <BusinessNetwork />

        {/* Section 10: Founder */}
        <FounderSection />

        {/* Section 11: Testimonials */}
        <Testimonials />

        {/* Section 12: Knowledge Centre */}
        <KnowledgeCentre />

        {/* Section 13: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 14: Footer */}
      <Footer />
    </div>
  );
}
