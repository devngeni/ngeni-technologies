import { LabsLayout } from "@/components";
import { LabsHomeSection, TimelineSection, ToolsSection } from "@/components/labs";
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
      body: "Inter, sans-serif",
    },
    fontSizes: {
      body: "16px",
      heading: "24px",
      title: "76px",
      header: "16",
      paragraph: "16",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <LabsLayout>
        <LabsHomeSection />
        <TimelineSection />
        <ToolsSection />
      </LabsLayout>
    </ThemeProvider>
  );
}
