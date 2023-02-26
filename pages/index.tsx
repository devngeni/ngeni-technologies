import { Inter } from "next/font/google";
import { LandingSection, Layout, ServiceSection } from "@/components";
import TestimonialSection from "@/components/home/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <ServiceSection />
      <TestimonialSection />
    </Layout>
  );
}
