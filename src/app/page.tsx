import Image from "next/image";
import Hero from "./components/hero";
import WhatWeAutomate from "./components/what-we-automate";
import HowItWorks from "./components/how-it-works";
import CaseStudies from "./components/case-studies";
import LeadMagnet from "./components/lead-magnet";
import WhyWorkWithMe from "./components/why-work-with-me";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Founder from "./components/founder";
import { getAllPosts } from "@/lib/contentful";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <Hero />
      <WhatWeAutomate />
      <HowItWorks />
      <CaseStudies posts={posts} />
      <Testimonials />
      <Founder />
      <LeadMagnet />
      {/* <WhyWorkWithMe /> */}
    </main>
  );
}
