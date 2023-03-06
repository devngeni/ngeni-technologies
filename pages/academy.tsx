import { LandingSection, Layout, ServiceSection } from "@/components/Layouts";
import TestimonialSection from "@/components/academy/Testimonials";
import BlogSection from "@/components/academy/Blog";
import { ThemeProvider } from "styled-components";

export default function Home() {
  const theme = {
    colors: {
      primary: "#0077FF",
      secondary: "#FF7700",
      text: "#333",
      background: "#FFF",
    },
    fonts: {
      body: "Inter, sans-serif",
    },
    fontSizes: {
      body: "16px",
      heading: "24px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <LandingSection />
        <ServiceSection />
        <TestimonialSection />
        <BlogSection />
      </Layout>
    </ThemeProvider>
  );
}
