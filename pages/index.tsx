import { LandingSection, Layout, ServiceSection } from "@/components";
import TestimonialSection from "@/components/home/Testimonials";
import BlogSection from "@/components/home/Blog";


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
