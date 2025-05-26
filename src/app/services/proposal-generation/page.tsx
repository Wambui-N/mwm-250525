import React from "react";
import HeadlineSection from "./components/HeadlineSection";
import SubheadlineSection from "./components/SubheadlineSection";
import PainToReliefSection from "./components/PainToReliefSection";
import AutomationBulletsSection from "./components/AutomationBulletsSection";
import BeforeAfterTable from "./components/BeforeAfterTable";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import FinalCTASection from "./components/FinalCTASection";
import DemoSection from "./components/DemoSection";

const ProposalGenerationPage = () => {
  return (
    <main className="">
      <HeadlineSection />
      {/* <SubheadlineSection /> */}
      <PainToReliefSection />
      <AutomationBulletsSection />
      <BeforeAfterTable />
      <TestimonialSection />
      <PricingSection />
      <FinalCTASection />
      <DemoSection />
    </main>
  );
};

export default ProposalGenerationPage;
