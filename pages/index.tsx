import { LabsLayout } from "@/components/Layouts";
import {
  BusinessSection,
  CompletedSection,
  LabsHomeSection,
  ProjectsSection,
  SubscribeSection,
  TimelineSection,
  ToolsSection,
  TrustSection,
  WhyNgeniSection,
} from "@/components/labs";
import { ThemeProvider } from "styled-components";

export default function LabsHomePage() {
  const theme = {
    colors: {
      main: "#010A0F",
      tertiary: "#F5F5F5",
      secondary: "#F5F5F5",
      paragraph: "#010A0F",
      section: "#ffffff",
    },
    fonts: {
      body: "  Montserrat",
    },
    fontSizes: {
      body: "16px",
      heading: "24px",
      title: "76px",
      header: "16px",
      mobileTitle: "36px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <LabsLayout>
        <LabsHomeSection />
        <TimelineSection />
        <ToolsSection />
        <BusinessSection />
        <ProjectsSection />
        <CompletedSection />
        <WhyNgeniSection />
        <SubscribeSection />
        <TrustSection />
      </LabsLayout>
    </ThemeProvider>
  );
}
