import { LandingSection, Layout, ServiceSection } from "@/components";
import TestimonialSection from "@/components/academy/Testimonials";
import BlogSection from "@/components/academy/Blog";

export default function Home() {
  return (
    <Layout>
      <LandingSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
    </Layout>
  );
}
